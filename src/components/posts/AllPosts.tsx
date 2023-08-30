"use client"
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { GeneralContext } from '../context/GeneralContextProvider';
import {GeneralProviderNoAccount} from "@component/context/GeneralContext";
import Link from "next/link";
import type { msgType,PostDataType,userType } from "@component/context/type";
import CreateNewUser from "@component/posts/CreateNewUser";
import AllSubPosts from "@/components/posts/AllSubPosts";
import {  signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Inter, Montserrat, Chela_One } from 'next/font/google';


const chela = Chela_One({weight:"400",subsets:["latin"]});

const AllPosts = ({imgSrc}:{imgSrc:string | null}) => {
    
    const { allPosts,setAllPosts,signin, setSignin ,isSignin,setIsSignin,account,setAccount,session,allUsers,genMsg} = React.useContext(GeneralContext);
    const [msg, setMsg] = React.useState<msgType>({ loaded: false, msg: "" });
    const [isNewUser,setIsNewUser]=React.useState<boolean>(false);
    const [ userId,setUserId]=React.useState<number | null>(null);
    const [postData, setPostData] = React.useState<PostDataType | null>(null);
    

    React.useEffect(()=>{
        const email=session?.user?.email;
        const getAccount=async()=>{
            const options={
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(email)
            }
            const res=await fetch("/api/posts/users",options);
            if(!res.ok){
                const body:{message:string}=await res.json()
                setMsg({loaded:false,msg:`could not find your account: ${body}`})
            }
            const body:userType=await res.json();
            setAccount({loaded:true,data:{id:body.id,name:body.name,email:body.email,status:"authenticated"}});
            setUserId(body.id)
            setMsg({loaded:true,msg:`${body.name} you can now go to you dashboard`})
        }
        if(email){
            getAccount();
        }else{
            setMsg({loaded:false,msg:"log in the edit your posts"})
        }
    },[session,setMsg,setAccount]);

    
    
    return (
        <GeneralProviderNoAccount>
        <div className={`${chela.className} flex flex-col justify-center items-center w-full dark:bg-black dark:text-white text-site_blue_dark bg-white` }>
            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
                { imgSrc && <Image src={imgSrc} height={75} width={75} alt="www.masterconnect.ca" className="rounded-[50%]"/>}
                <div className="text-center text-5xl my-5">Community</div>
                {genMsg.loaded ?
                <div className="text-center text-2xl my-5 text-orange">{genMsg.msg && genMsg.msg}</div>
                :
                <div className="text-center text-xl my-5 text-red">{genMsg && genMsg.msg}</div>
                }
            </div>
            
            {msg.loaded ? 
            <div className="text-center text-lg my-5 text-blue-800">{msg.msg}</div>
            :
            <div className="text-center text-lg my-5 text-red-800">{msg.msg}</div>
            }
           
             <AllSubPosts
             allUsers={allUsers}
             chela={chela.className}
             account={account}
             allPosts={allPosts}
             setAllPosts={setAllPosts}
             userId={userId}
             setMsg={setMsg}
             msg={msg}
             isSignin={isSignin}
             setPostData={setPostData}
             postData={postData}
             />
             <div className="flex flex-col items-center justify-center">
                
             </div>
        </div>
        </GeneralProviderNoAccount>
    )
}

export default AllPosts