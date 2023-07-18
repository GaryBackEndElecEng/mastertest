"use client";
import React from 'react'
import generalInfo from './generalInfo';
import { Grid, Container,} from '@mui/material';
import styles from "./contact.module.css";

type generalInfoType = {
    id: number,
    name: string,
    address: string,
    cell: string,
    country: string,
    provState: string,
    city: string,
    postal: string,
    extra: string,
    siteArray: string[]
  }
  type mediaLinkType={
    name:string,
    link:string
  }
const GetGenInfo = () => {
    const [getGenInfo, setGetGenInfo] = React.useState<generalInfoType | null>(null);
  const [mediaLink,setMediaLink]=React.useState<mediaLinkType[]>([]);

  React.useMemo(async (): Promise<void> => {
    const getInfo: generalInfoType | null = await generalInfo();
    setGetGenInfo(getInfo);
    if(getInfo){
      let arr:mediaLinkType[]=[];
      getInfo.siteArray.forEach((media,index)=>{
        switch(media.split("::")[0]){
          case "fb":
            arr.push({name:"FB",link:media.split("::")[1].trim()});
            break;
          case "linkedin":
            arr.push({name:"linkedlin",link:media.split("::")[1].trim()})
            break;
          case "github":
            arr.push({name:"github",link:media.split("::")[1].trim()});
            break;
          case "instagram":
            arr.push({name:"instagram",link:media.split("::")[1].trim()});
            break;
          case "masterconnect":
            arr.push({name:"www.masterconnect.ca",link:media.split("::")[1].trim()});
            break;
            default:
                return;
        }
       
      });
      setMediaLink(arr);
    }
  }, []);

  return (
    <Container maxWidth="md">
        {getGenInfo &&
          <div className="mx-0 my-auto flex flex-col justify-start shadow-xl shadow-blue p-3 rounded-lg">

            <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="cols-spans-1 shadow-md p-2 ">
                <h4 className={`text-2xl my-2 mx-0 ${styles.fontStyleCt2}`}
                style={{backgroundImage:"var(--background-contact)"}}
                >
                  We are located at:
                </h4>
              <div className=" flex flex-row flex-wrap gap-1 justify-center items-center ">
                
                <h6>{getGenInfo.address}</h6>
                <h6>,{getGenInfo.city}</h6>
                <h6>,{getGenInfo.country}</h6>
                <h6>,PO:{getGenInfo.postal}</h6>
                </div>
              </div>
              <ul className="cols-spans-1 flex flex-col justify-center items-center shadow-md w-full">
                <h6 className="text-2xl font-bold my-2">Join Us!:</h6>
                <div className="h-[4px] w-full " style={{background:"var(--background-contact)"}}/>
                {mediaLink.map((media,index)=>(
                  <li className="text-md hover:text-blue hover:shadow-md transition-all" key={index}>
                    <a href={media.link} className="mx-auto my-1 cursor-pointer px-2 hover:tracking-widest">{media.name}</a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        }
    </Container>
  )
}

export default GetGenInfo