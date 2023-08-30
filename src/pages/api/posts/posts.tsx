
import type {NextApiRequest,NextApiResponse} from 'next';
import prisma from "@_prisma/client";
import type {DataType,userType} from "@component/context/type";
import {getServerSession} from "next-auth";
import authOptions from "@component/context/options";

type messageType={
  message:string
}

 export function convert(id:string | string[] |undefined):number | undefined{
  if(typeof(id)==="string"){
    return parseInt(id)
  }else if(typeof(id)==="string" && id[1]){
    let conv=parseInt(id)
    return conv
  }else{
    return
  }
  
}

export default async function handle(req:NextApiRequest, res:NextApiResponse<any>) 
{
  const {postId,userId}=req.query;
  const getPostId= convert(postId);
  const getUserId= convert(userId);

  if(req.method==="GET" && !getPostId && !userId)
  {
   
    try {
      const data = await prisma.post.findMany({
        include:{
          answers:true
        }
      })
      res.status(200).json(data)
      prisma.$disconnect()
      
    } catch (error) {
      res.status(404).json({message:"did not get, not found"})
    }
  }

  if(getPostId && getUserId)
  {
    
    try {
        const deleteRec = await prisma.post.delete({
          where:{
            id:getPostId,
            userId:getUserId
            
          },
          include:{
            answers:true
          }
        });
        res.status(200).json(deleteRec);
      prisma.$disconnect();
    } catch (error) {
      res.status(400).json({message:"could not find"})
    }
  }
  
  if(req.method==="PUT")
  {
    
    try {
      const getBody:{id:number,title:string,content:string,userId:number,published:boolean}= await req.body;
      // console.log(getBody)
      //pull userId from teh session ( next.auth)
      const isuser=await prisma.user.findUnique({
        where:{
          id:getBody.userId,
        }
      });
      if(isuser){
         await prisma.post.update({
          where: {
            id:getBody.id
          },
          data: {
            ...req.body
          }
        });
      }
      prisma.$disconnect()
      const getAll = await prisma.post.findMany({
        where:{
          userId:getBody.userId
        }
      })
      res.status(200).json(getAll);
      prisma.$disconnect()
    } catch (error) {
      res.status(404).json({message:"did not find your post"})
    }
  }

  
}

