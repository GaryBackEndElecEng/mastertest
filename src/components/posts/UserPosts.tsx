"use client"
import React from 'react';
import DisplayPage from "@/components/posts/DisplayPage";
import { useSearchParams } from 'next/navigation';
import { DataType, userAccountType,msgType } from "@component/context/type";
import { GeneralContext } from "@component/context/GeneralContextProvider";
import {useSession} from "next-auth/react";

const UserPosts = () => {
  const params = useSearchParams();
  const { data:session,status}=useSession();
  // const userId: string | null=params ? params.get("userId") : null;
  const [usersPosts, setUsersPosts] = React.useState<DataType>([]);
  const { account, setAccount,setIsSignin, setMsg,msg } = React.useContext(GeneralContext);
  const [msg2,setMsg2]=React.useState<msgType>({loaded:false,msg:""})
  const getUserId = account.loaded && account.data ? account.data.id : null;
  
  //SETTING USER'S ACCOUNT FOR getUserId
  React.useMemo(async ()=>{
    if(status==="authenticated" && session.user && session.user.email){
      const options={
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(session.user.email)
      }
    try {
      const res=await fetch(`/api/posts/users`,options);
      if(!res.ok){
        const body:{message:string}=await res.json()
        setMsg({loaded:false,msg:body.message})
      }
      const body= await res.json();
      setAccount({loaded:true,data:body});
      setMsg({loaded:true,msg:`${body.name}'s dashboard`});
    } catch (error) {
      setMsg({loaded:false,msg:" server error"});
    }
  }
  },[session,status,setMsg,setAccount]);
  //GETTING USERS POSTS
  React.useMemo(() => {
    
    const getUsersPosts = async () => {
      // const getUserId= userId ? parseInt(userId):null;
      const res = await fetch(`/api/posts/users-post?userId=${getUserId}`);
      if (!res.ok && msg.msg) {
        if(res.status ==404){
        const body:{message:string}= await res.json()
        setMsg({loaded:false,msg:`${msg.msg}, no posts found`})
        }else{
          setMsg({loaded:false,msg:`server error pulling your posts`})
          throw new Error(" server error")
        }
      }
      const body: DataType = await res.json()
      setMsg2({loaded:true,msg:`${body.length} posts`})
      setUsersPosts(body);
    }
    if (getUserId) {
      getUsersPosts()
    }
  }, [getUserId,setMsg2,setMsg]);


  return (
    <div className="mx-0 lg:mx-auto lg:container flex flex-col items-center w-full ">
      <div className="flex flex-col items-center justify-center">
        {msg.loaded ?
      <div className="text-lg text-blue-500 my-2">
        {msg && msg.msg}
        <span> {msg2.loaded && msg2.msg}</span>
      </div>  
      :
      <div className="text-lg text-red-500 my-2">
        {msg && msg.msg}
      </div>
      }
      </div>
      { status==="authenticated" &&
      <DisplayPage
       usersPosts={usersPosts}
       setUsersPosts={setUsersPosts}
       userId={account.data && account.data.id}
       />
       }
    </div>
  )
}

export default UserPosts