"use client";
import React from 'react';
import { FormControl, Input, FormHelperText } from "@mui/material";
import {  msgType,userType,userAccountType } from "@component/context/type";
import Link from "next/link";
import { GeneralContext } from "@component/context/GeneralContextProvider";

type mainNewUserType={
  setSignin: React.Dispatch<React.SetStateAction<boolean>>,
  setMsg: React.Dispatch<React.SetStateAction<msgType>>,
  msg: msgType,
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>,
  isSignin:boolean
}

const CreateNewUser = ({setSignin,msg,setMsg,setIsNewUser,isSignin}:mainNewUserType) => {
  const { account, setAccount,setIsSignin } = React.useContext(GeneralContext);
  const [name, setName] = React.useState<string | undefined>()
  const [password, setPassword] = React.useState<string | undefined>()
  const [email, setEmail] = React.useState<string | undefined>()
  const isComplete: boolean=(name && email && password) ? true:false;

  

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const data = { name: name, email: email, password: password }
    const createNewUser = async () => {
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_baseurl}/api/auth/register`, options);
      if (!res.ok) {
        setMsg({ loaded: false, msg: " did not register. email and password must be unique" })
        throw new Error(" did not register. email and password must be unique")
      }
      const body:userType = await res.json();
      const tempData:userAccountType = { loaded: true, data: {id:body.id, name: body.name, email: body.email,status:"unauthenticated" } }
      localStorage.setItem("account", JSON.stringify(tempData));
      setAccount(tempData);
      setMsg({ loaded: true, msg: "thank for registering" })
      setIsNewUser(false);
      setIsSignin(true);

    }
    if (data.name && data.email && data.password) {
      createNewUser();
    }


  }
  const handleSignin=(e:React.MouseEvent)=>{
    e.preventDefault();
    setSignin(true);
    setIsNewUser(false);
  };

  return (
    <div className={`${isSignin ? "hidden":"visible"} flex flex-col items-center justify-center`}>
      <form className="flex flex-col justify-content-center items-center bg-[whitesmoke] text-blue-600 p-5">
        <FormControl className="flex flex-col justify-content-center items-center">
          <div className="text-center text-lg font-bold">email</div>
          <Input
            id="email"
            value={email ? email : "email"}
            onChange={(e) => setEmail(e.target.value)}
            className="mx-auto my-2 bg-white text-blue-600"
          />
          <FormHelperText>youremail@email.com</FormHelperText>
        </FormControl>
        <FormControl className="flex flex-col justify-content-center items-center">
          <div className="text-center text-lg font-bold">name</div>
          <Input
            id="name"
            value={name ? name : "name"}
            onChange={(e) => setName(e.target.value)}
            className="mx-auto my-2 bg-white text-blue-600"
          />
          <FormHelperText>name</FormHelperText>
        </FormControl>
        <FormControl className="flex flex-col justify-content-center items-center">
          <div className="text-center text-lg font-bold">password</div>
          <Input
            id="password"
            value={password ? password : "pswd"}
            onChange={(e) => setPassword(e.target.value)}
            className="mx-auto my-2 bg-white text-blue-600"
          />
          <FormHelperText>password</FormHelperText>
        </FormControl>
        <div className="flex flex-col items-center justify-center my-2 gap-3">
          <button className={`m-auto px-4 py-1 border border-blue-600 shadow shadow-blue-600 px-4 py-1 ${isComplete ? "font-bold":"font-normal"}  `} onClick={(e) => handleSubmit(e)}>register</button>
          <button className="m-auto px-4 py-1 shadow shadow-blue-600 px-4 py-1" onClick={(e) => handleSignin(e)}>sign in</button>
        </div>
        {(msg && msg.msg && account.data) ?
          <div className="flex flex-col justify-center items-center">
            <div className="text-center text-xl my-3 px-3">{msg.msg}
            </div>
            <div className="text-center text-xl my-3 px-3">go to your message page?
            </div>
            <Link href={`/user-posts/${account.data.id}`} className="flex flex-col items-center">
              <button className="m-auto px-4 py-1 border border-blue-600 shadow shadow-blue-600 px-4 py-1" >
                messagePage
              </button>
            </Link>
          </div>
          :
          <div className="text-center text-xl my-3 px-3">{msg.msg}
          </div>
        }
      </form>
    </div>
  )
}

export default CreateNewUser