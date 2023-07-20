"use client";
import React,{MouseEvent} from 'react'
import Amplify, {API} from 'aws-amplify';
// import { init } from 'next/dist/compiled/@vercel/og/satori';
import awsExports from "../../aws-exports";

type awsExportType={
    aws_project_region: string;
    aws_cloud_logic_custom: {
        name: string;
        endpoint: string;
        region: string;
}[]
}
// type amplifyType={configure:any}
// Amplify.configure(awsExports);

const myApi:string="api8fcf946a";
const path:string='/customers';

type initType= {
    [key: string]: string | null;
}
const UserApi = () => {
    const [input,setInput]=React.useState("");
    const [ customers,setCustomers]=React.useState<any[]>([]);
    const init1:initType={key:null}
    // function getCustumer(e:MouseEvent,input:string):void{
    //     e.preventDefault();
    //     let customerId=input;
    //     API.get(myApi,path + "/" + customerId,init:init1)
    //     .then(response=>{
    //         console.log(response);
    //         setCustomers([...customers,response]);
    //     }).catch(error=>{
    //         console.log(error)
    //     });
    // }
  return (
    <div>
        <h1>super simple response</h1>
        <div className="grid place-items-center">
            <input
             placeholder=" id"
             type="text"
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             />
             {/* <button className="button"
             onClick={(e)=>getCustumer(e,input)}
             >getCutomer from backend</button> */}
        </div>
        <h2 className={customers.length>0 ? "visible":"hidden"}>Response</h2>
        {customers.map((obj,index)=>(
            <div className="grid grid-cols-4 place-items-center" key={index}>
                <h6 className="col-span-1">
                    <span><b>CustomerId</b>{obj.customerId} -<b>customer Name:</b>{obj.customerName}</span>
                </h6>
            </div>
        ))}
    </div>
  )
}

export default UserApi
