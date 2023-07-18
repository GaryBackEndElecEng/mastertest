"use client";
import React from 'react';
import axios,{AxiosError,isAxiosError} from 'axios'
type translateType={
    phrase:string,
    source:string,
    target:string
}

const Translate = ({phrase,source,target}:translateType) => {
    const [result,setResult]=React.useState<string | null>(null);
    
    React.useEffect(()=>{
        const apiKey:string | undefined=process.env.NEXT_PUBLIC_rapidAip
    const getTranslation=async()=>{
        const encodedParams = new URLSearchParams();
        encodedParams.set('source_language', source);
        encodedParams.set('target_language', target);
        encodedParams.set('text', phrase);
        // console.log("source",source)
        const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: encodedParams,
        };
        
        try {
            const res = await axios.request(options);
            // Content(res.data.data.translatedText);
            return setResult(res.data.data.translatedText)
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.log(error.status)
                console.error(error.response)
            }else{
                console.error(error)
            }
        }
    }
    if(source && target && phrase && apiKey){
    getTranslation();
    }else{
        switch(true){
            case !source:
                alert("source not there");
                break;
            case !target :
                alert("target not there");
                break;
            default:
                alert("phrase not there");
                return
        }
    }
},[source,target,phrase]);
    return(
<div className="container mx-auto flex flex-col px-2 py-3 justify-center items-center">
    {result ? <div>
    <h3 className="text-3lg text-center text-black">
        The result is:
    </h3>
    <h3 className="text-3lg text-center text-stone-600">
        answer: {result}
    </h3>
    </div>
    :
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl text-center m-auto">getting translation..</h3>
    </div>
    }
</div>
)
}

export default Translate

function Content(result:string){
    
    return(
    <div className="container mx-auto flex flex-col px-2 py-3 justify-center items-center">
        <h3 className="text-3lg text-center text-black">
            The result is:
        </h3>
        <h3 className="text-3lg text-center text-stone-600">
            answer: {result}
        </h3>
    </div>
    )
}