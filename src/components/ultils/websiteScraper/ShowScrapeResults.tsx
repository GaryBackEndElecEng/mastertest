"use client";
import React from 'react';
import { getScrapType } from './getscraped';

type mainShowType = {
  getResults: getScrapType | undefined
}
function narrowLine(sent:string,num:number):string{
  let len:number=sent.length;
  const sentArr:string[]=sent.split("");
  let tempStr:string="";
  if(len > num){
    sentArr.splice(len-1,0,"\n");
  }
  tempStr=sentArr.join("");
  return tempStr
}
const ShowScrapeResults = ({ getResults }: mainShowType) => {
  const num:number=30;
  return (

    <div className="flex flex-col mx-0  w-full my-2 shadow-lg shadow-blue rounded-lg p-2 px-2">
      {getResults &&
        <div className="m-auto ">
          <h3 className="text-md m-auto">domaine:{getResults.domain}</h3>
          {getResults.facbook &&
           <h3 className="text-md m-auto">facebook:{narrowLine(getResults.facbook,num)}</h3>
          }
          {getResults.intagram &&
           <h3 className="text-md m-auto">instagram:{narrowLine(getResults.intagram,num)}</h3>
          }
          {getResults.snapchat &&
           <h3 className="text-md m-auto">snap-chat:{narrowLine(getResults.snapchat,num)}</h3>
          }
          {getResults.tiktok &&
           <h3 className="text-md m-auto">TikTok:{narrowLine(getResults.tiktok,40)}</h3>
          }
          {getResults.youtube &&
           <h3 className="text-md m-auto">youtube:{narrowLine(getResults.youtube,num)}</h3>
          }
          {getResults.github &&
           <h3 className="text-md m-auto">hithub:{narrowLine(getResults.github,num)}</h3>
          }
          <div className="flex flex-col lg:flex-row justify-around items-center p2 m-2">
            <small className="text-xs m-auto m-auto flex flex-col">
              <span className="font-bold">emails:</span>
              {
              (getResults.emails && getResults.emails.length > 0) &&

               getResults.emails.map((email, index) => (
                <small key={index}>
                  <small className="text-xs m-auto" key={index}>
                    <div>email:</div>
                    {email.value}
                  </small>
                  <small className="text-xs m-auto" key={index}>
                    <div>,sources:</div>
                    {(email.sources && email.sources.length > 0) && email.sources.map((source, index) => (
                    <small key={`${index}-${index}`}>
                      {narrowLine(source,num)}
                    </small>
                  ))}</small>
                </small>
              ))
              }
            </small>
            <small className="text-xs m-auto"><span className="font-bold">phone numbers:</span>
              {
              (getResults.phone_numbers && getResults.phone_numbers.length>0)
               && getResults.phone_numbers.map((email, index) => (
                <small key={index}>
                  <small className="text-xs m-auto" key={index}>
                     <div>phone number:</div>
                  {narrowLine(email.value,num)}
                  </small>
                  <small className="text-xs m-auto" key={index}>sources:{email.sources.map((source, index) => (
                    <small key={`${index}-${index}`}>
                      {source}
                    </small>
                  ))}</small>
                </small>
              ))
              }
            </small>
          </div>
        </div>
      }
    </div>

  )
}

export default ShowScrapeResults