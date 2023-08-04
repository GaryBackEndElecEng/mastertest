"use client";
import React from 'react'

type mainRawdataTYpe={
    dump:string
}
const RawData = ({dump}:mainRawdataTYpe) => {
    const [sentence,setSentence]=React.useState<string[] | null>(null);

    React.useEffect(()=>{
        if(dump){
            let arr:string[]=[];
            let splitPhrase:string[]=dump.split("\n");
            splitPhrase.forEach((sent)=>{
                arr.push(sent);
            });
            setSentence(arr);
        }
    },[dump]);

  return (
    <div className="mx-auto my-2">
        {sentence && 
            sentence.map((sent,index)=>(
                <div className="m-auto" key={`${index}-dump`}>
                    {sent}
                </div>
            ))
        }
    </div>
  )
}

export default RawData