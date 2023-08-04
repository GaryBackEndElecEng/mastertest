"use client";
import React from 'react';
import { getScrapType } from './getscraped';

type mainShowType = {
  getResults: getScrapType | undefined
}
const ShowScrapeResults = ({ getResults }: mainShowType) => {
  return (

    <div className="flex flex-col mx-auto w-full my-2 shadow-lg shadow-blue rounded-lg p-2">
      {getResults &&
        <div className="m-auto">
          <h3 className="text-md m-auto">domaine:{getResults.domain}</h3>
          {getResults.facbook &&
           <h3 className="text-md m-auto">facebook:{getResults.facbook}</h3>
          }
          {getResults.intagram &&
           <h3 className="text-md m-auto">instagram:{getResults.intagram}</h3>
          }
          {getResults.snapchat &&
           <h3 className="text-md m-auto">snap-chat:{getResults.snapchat}</h3>
          }
          {getResults.tiktok &&
           <h3 className="text-md m-auto">TikTok:{getResults.tiktok}</h3>
          }
          {getResults.youtube &&
           <h3 className="text-md m-auto">youtube:{getResults.youtube}</h3>
          }
          {getResults.github &&
           <h3 className="text-md m-auto">hithub:{getResults.github}</h3>
          }
          <div className="flex flex-row justify-around items-center p2 m-2">
            <small className="text-xs m-auto"><span className="font-bold">emails:</span>
              {
              (getResults.emails && getResults.emails.length > 0) &&

               getResults.emails.map((email, index) => (
                <small key={index}>
                  <small className="text-xs m-auto" key={index}>email:{email.value}</small>
                  <small className="text-xs m-auto" key={index}>sources:{(email.sources && email.sources.length > 0) && email.sources.map((source, index) => (
                    <small key={`${index}-${index}`}>
                      {source}
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
                  <small className="text-xs m-auto" key={index}>phone number:{email.value}</small>
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