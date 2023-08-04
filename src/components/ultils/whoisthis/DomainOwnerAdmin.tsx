"use client";
import React from 'react';
import {ownerType,adminType} from "@/components/ultils/whoisthis/getDomainInfo";

type mainOwnerType={
contact?:{
  owner:ownerType[],
  admin:adminType[],
  tech:adminType[]
}
}
const DomainOwnerAdmin = ({contact}:mainOwnerType) => {
    const [getOwner,setOwner]=React.useState<ownerType[] | undefined>();
    const [getOwnerObj,setGetOwnerObj]=React.useState<string | undefined>();
    const isArray=(contact && contact.owner)? true : false;
    React.useEffect(()=>{
        if(isArray){
            setOwner(contact && contact.owner);
        }else{
            setGetOwnerObj(contact && JSON.stringify(contact))
        }
    },[isArray,setOwner,setGetOwnerObj,contact]);

  return (
    <div>
        {getOwner ?
            getOwner.map((owner:any, index) => (
                <small className="flex flex-row flex-wrap gap-2" key={index}>
                  {owner.handle && <small className="text-xs m-auto">handle:{owner.handle}</small>}
                  {owner.type && <small className="text-xs m-auto">type:{owner.type}</small>}
                  {owner.name && <small className="text-xs m-auto">name:{owner.name}</small>}
                  {owner.organization && <small className="text-xs m-auto">org:{owner.organization}</small>}
                  {owner.email && <small className="text-xs m-auto">email:{owner.email}</small>}
                  {owner.address && <small className="text-xs m-auto">add:{owner.address}</small>}
                  {owner.city && <small className="text-xs m-auto">city:{owner.city}</small>}
                  {owner.fax && <small className="text-xs m-auto">fax:{owner.fax}</small>}
                  {owner.country && <small className="text-xs m-auto">country:{owner.country}</small>}
                  {owner.phone && <small className="text-xs m-auto">phone:{owner.phone}</small>}
                  {owner.created && <small className="text-xs m-auto">created:{owner.created}</small>}
                </small>
              ))
              :
              <small className="flex flex-row flex-wrap gap-2">
                {getOwnerObj}
              </small>
        }
    </div>
  )
}

export default DomainOwnerAdmin