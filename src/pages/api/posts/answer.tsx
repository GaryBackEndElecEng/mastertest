import type {NextApiRequest,NextApiResponse} from 'next';
import prisma from "@_prisma/client";
import type {DataType,userType} from "@component/context/type";
import {getServerSession} from "next-auth";
import authOptions from "@component/context/options";

type messageType={
  message:string
}


export default async function handle(req:NextApiRequest, res:NextApiResponse<any>) 
{
    const {answer,postId,userId}=req.query;

    if(req.method=="POST"){
        try {
            const data= await prisma.answer.create({
                data:{
                    ...req.body
                }
            });
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message:" server error"})
        }
    }


}