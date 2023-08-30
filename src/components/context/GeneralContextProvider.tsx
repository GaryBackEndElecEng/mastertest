"use client"
import React from 'react';
import type {userAccountType,DataType,msgType,userType} from "./type";
import {useSession} from "next-auth/react";
import type {Session} from "next-auth";
const base_url=process.env.NEXT_PUBLIC_baseurl;

type generalContextType={
 setAccount:React.Dispatch<React.SetStateAction<userAccountType>>,
 account: userAccountType,
 allPosts: DataType,
 setAllPosts: React.Dispatch<React.SetStateAction<DataType>>,
 setSignin: React.Dispatch<React.SetStateAction<boolean>>,
 signin:boolean,
 isSignin:boolean,
 setIsSignin: React.Dispatch<React.SetStateAction<boolean>>,
 session:Session | null,
 status: "loading" | "authenticated" | "unauthenticated"
 setMsg: React.Dispatch<React.SetStateAction<msgType>>,
 msg: msgType,
 setUsers: React.Dispatch<React.SetStateAction<userType[]>>,
 users:userType[],
allUsers:userType[],
genMsg: msgType,
}
export const GeneralContext = React.createContext<generalContextType>({} as generalContextType);

const GeneralContextProvider = (props:any) => {
  const {data:session,status}=useSession();
    const [account,setAccount]=React.useState<userAccountType>({loaded:false,data:null});
    const [allPosts,setAllPosts]=React.useState<DataType>([]);
    const [signin, setSignin] = React.useState<boolean>(false);
    const [isSignin, setIsSignin] = React.useState<boolean>(false);
    const [msg,setMsg]=React.useState<msgType>({loaded:false,msg:null})
    const [users,setUsers]=React.useState<userType[]>([]);
    const [allUsers,setAllUsers]=React.useState<userType[]>([]);
    const [genMsg,setGenMsg]=React.useState<msgType>({loaded:false,msg:null})

    React.useEffect(()=>{
      const getAllPosts=async()=>{
        const options={
          method:"GET",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json",
        }
      }
        const res=await fetch(`/api/posts/posts`,options);
        if(!res.ok){
          throw new Error("did not get posts")
        }
        const body:DataType= await res.json();
        setAllPosts(body.filter(obj=>obj.published ===true));
        
      }
      getAllPosts();
    },[]);

    React.useEffect(()=>{
      const getAllUsers=async()=>{
        const options={
          method:"GET",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json",
        }
      }
        const res=await fetch(`/api/posts/users`,options);
        if(!res.ok){
          if(res.status>=400 && res.status < 500){
            const body:any=await res.json()
            setGenMsg({loaded:false,msg:`${res.status} error - no records-${JSON.stringify(body)}`})
          }
          throw new Error("did not get posts");
        }
        const body:userType[]= await res.json();
        setAllUsers(body);
        setGenMsg({loaded:true,msg:" all is well"})
      }
      getAllUsers();
    },[]);

  return (
    <GeneralContext.Provider value={{account,setAccount,allPosts,setAllPosts,signin, setSignin,isSignin,setIsSignin,session,status,msg,setMsg,users,setUsers,allUsers,genMsg}}>
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider

// console.log(GeneralContext)