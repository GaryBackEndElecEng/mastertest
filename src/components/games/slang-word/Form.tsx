"use client";
import React,{MouseEvent} from 'react';
import {Input,FormControl,Grid, InputLabel} from '@mui/material';
import Image from 'next/image';

type inputType={
    setPhrase:React.Dispatch<React.SetStateAction<string | null>>,
    phrase:string | null ,
}
const Form = ({setPhrase,phrase}:inputType) => {
  const staticImage=process.env.NEXT_PUBLIC_aws;
    const slang=`${staticImage}/slang.png`;
    const [tempPhrase,setTempPhrase]=React.useState<string | undefined>("");

    const handleSubmit=(e:MouseEvent<HTMLButtonElement> | undefined)=>{
        e?.preventDefault();
        if(!phrase && tempPhrase){
        setPhrase(tempPhrase)
        
        }
    }
    // console.log("category in Form",category)
  return (
    <Grid container className=" w-full mb-6" spacing={{xs:4,md:1}}>
      <Grid item xs={12} md={2} className="mx-auto rounded-lg flex flex-col items-center justify-center">
        <Image src={slang} alt="www.masterconnect.ca" height={400} width={400}
        className="  inset-0 rounded-inherit"
        />

      </Grid>
      <Grid item xs={12} md={8}>
    <form action="" className="flex flex-col items-center justify-center ">
    <FormControl className="flex flex-col justify-center items-center">
        <InputLabel htmlFor="phrase" shrink={true}>enter a slang</InputLabel>
        <br/>
        <Input
        name="phrase"
        placeholder="enter a slang word"
        id="phrase"
        value={tempPhrase}
        onChange={(e)=>setTempPhrase(e.target.value)}
        className="text-lg"
        />
        <button type="submit" className="button my-2" onClick={(e)=>handleSubmit(e)}>submit</button>
    </FormControl>
    </form>
    </Grid>
    <Grid item xs={12} md={2} className="mx-auto rounded-lg flex flex-col items-center justify-center">
      <Image src={slang} alt="www.masterconnect.ca" height={400} width={400}
      className="  inset-0 w-full"
      />

    </Grid>

    </Grid>
  )
}

export default Form