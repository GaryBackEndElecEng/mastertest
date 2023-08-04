"use client";
import React from 'react';
import { whoDomainType } from './getDomainInfo';
import DomainOwnerAdmin from "@/components/ultils/whoisthis/DomainOwnerAdmin";
import RawData from './RawData';
const whoDomtype={} as whoDomainType;
type mainResultsType={
    getResults:whoDomainType | undefined | null,
}
const DomainDetail = ({getResults}:mainResultsType) => {
 
  return (
    <div className="flex flex-col lg:mx-auto mx-2 justify-center items-center flex-wrap my-2 shadow-lg shadow-blue rounded-lg p-2">
      {(getResults && !(whoDomtype===getResults)) &&
        <div className="m-auto flex flex-col">
          <h3 className="text-md m-auto">server:{getResults.server && getResults.server}</h3>
          {getResults.name &&
           <h3 className="text-md m-auto">name:{getResults.name }</h3>
          }
          {getResults.idnName &&
           <h3 className="text-md m-auto">Id name:{getResults.idnName}</h3>
          }
          {getResults.ips &&
           <h3 className="text-md m-auto">ips:{getResults.ips}</h3>
          }
          {getResults.created &&
           <h3 className="text-md m-auto">created:{getResults.created}</h3>
          }
          {getResults.changed &&
           <h3 className="text-md m-auto">changed:{getResults.changed}</h3>
          }
          {getResults.expires &&
           <h3 className="text-md m-auto">expires:{getResults.expires}</h3>
          }
          {getResults.registered &&
           <h3 className="text-md m-auto">registered:true</h3>
          }
          {getResults.dnssec &&
           <h3 className="text-md m-auto">dnssec:{getResults.dnssec}</h3>
          }
          {getResults.network &&
           <h3 className="text-md m-auto">network:{getResults.network}</h3>
          }
          {getResults.exception &&
           <h3 className="text-md m-auto">exception:{getResults.exception}</h3>
          }
          {getResults.parsedContacts &&
           <h3 className="text-md m-auto">parsedContacts:true</h3>
          }
          <div className="flex flex-col justify-center items-start px-2 mx-auto">
            <small className="text-xs mx-0">
                <div className="font-bold">nameservers:</div>
              {
              (getResults.nameserver && getResults.nameserver?.length > 0) &&

               getResults.nameserver?.map((nameserver, index) => (
                <small key={index}>
                  <small className="text-xs mx-0" key={index}>
                    {nameserver},
                  </small>
                  </small>
                  ))
              }
            </small>
            <small className="text-xs mx-0">
                <div className="font-bold">servers status:</div>
              {
              (getResults.status && getResults.status.length>0)
               ? 
                ( getResults.status.map((status,index)=>(
                  <small className="text-xs m-auto" key={`${index}-${status}`}>
                    <div>{status.split(" ")[0]}</div>
                    <div>{status.split(" ")[1]}</div>
                  </small>
                  ))
                )
                :
                <small >
                  <small className="text-xs m-auto">
                    {getResults.status && JSON.stringify( getResults.status[0])}
                  </small>
                </small>
              
              }
            </small>
            <small className="text-xs m-auto">
            <div className="m-auto my-2 px-auto ">
                 <div className="my-2 px-auto font-bold">
                  contacts:owner
                 </div>
              {(getResults && getResults.contacts) &&
               <DomainOwnerAdmin contact={getResults.contacts}/>
              }
              </div>
            
            </small>
          </div>
          <div className="flex flex-col justify-center items-start p2 m-2">
            {(getResults.rawdata) &&
            getResults.rawdata?.map((dump,index)=>(
                <div className="m-auto px-4" key={`${index}-dump`}>
                    <RawData dump={dump}/>
                </div>
            ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default DomainDetail