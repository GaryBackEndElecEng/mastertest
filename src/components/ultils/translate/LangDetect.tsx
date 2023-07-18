// "use client";
import React from 'react';
import axios from 'axios';
type resType={
        detections:[
            {
                isReliable:boolean,
                confidence:number,
                language:string
            }
        ]
}
const LangDetect =async ({phrase}:{phrase:string}) => {
// const [language,setLanguage]=React.useState<resType>()
const encodedParams = new URLSearchParams();
encodedParams.set('q',phrase);
const apiKey:string |undefined=process.env.NEXT_PUBLIC_rapidAip
if(apiKey){
    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const res = await axios.request(options);
      console.log(res.data.detections[0]);
        const body:resType=res.data
        return (<div>{JSON.stringify(body)}</div>)
    } catch (error) {
      console.error(error);
        return (<div><h3>did not work</h3></div>)
    }
  }
  
}

export default LangDetect