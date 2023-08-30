import {NextApiRequest,NextApiResponse} from "next";
import type {userType} from "@component/context/type";
import prisma from "@_prisma/client";

export default async function handle(
    req:NextApiRequest,
    res:NextApiResponse
    )
{
    const body=req.body;
    const {name,email,password}=body;
    

     if(req.method ==="POST" && body)
     {
        
        try {
            const user= await prisma.user.findUnique({
                where:{
                    email:body
                }
            });
            if(!user){
                res.status(400).json({message:`there is no user of type email:${email}`})
            }
            res.status(200).json(user)
            prisma.$disconnect();
        } catch (error) {
            res.status(500).json({message:"server error- try later"})
        }
     }
     else if(req.method==="GET")
     {

        try {
            const users= await prisma.user.findMany({
                include:{
                    posts:true,
                    answers:true
    
                },
            });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({message:" server issues pulling records"})
        }
     }

}