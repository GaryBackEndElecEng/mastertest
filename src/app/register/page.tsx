import React from 'react'
import Register from "@component/context/auth/Register";
import type {Metadata} from 'next';
import {metaregister} from "@component/metadata/metaregister";

export const metadata:Metadata=metaregister;


const page = () => {
  return (
    
    <div className=" lg:mx-auto lg:container relative mt-20 flex flex-col items-center  ">
        <Register/>
    </div>
    
  )
}

export default page