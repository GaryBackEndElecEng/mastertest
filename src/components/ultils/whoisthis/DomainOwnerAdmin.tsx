"use client";
import React from 'react';
import {ownerType,contactType} from "@/components/ultils/whoisthis/getDomainInfo";

type mainOwnerType={
contact?:contactType
}


const DomainOwnerAdmin = ({contact}:mainOwnerType) => {
    const [getOwner,setOwner]=React.useState<contactType | undefined>([]);
    const [getOwnerObj,setGetOwnerObj]=React.useState<string | undefined>();
    const isArray=(contact && contact.length>0)? true : false;
    
    React.useEffect(()=>{
      
        if(isArray){
            setOwner(contact && contact);
            
        }else{
          let testThis=contact ? JSON.stringify(contact):undefined;
          
            setGetOwnerObj(testThis)
        }
    },[isArray,setOwner,setGetOwnerObj,contact]);

  return (
    <div>
        {(getOwner && getOwner.length>0) ?
            getOwner.map((owner, index) => (
                <small className="flex flex-col flex-wrap gap-2" key={index}>
                  {owner.handle &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">handle</div>
                    <div>{owner.handle}</div>
                   </small>
                  }
                  {owner.type && 
                  <small className="text-xs m-auto">
                    <div className="font-bold my-2">type</div>
                    <div>{owner.type}</div>
                  </small>
                  }
                  {owner.name && 
                  <small className="text-xs m-auto">
                    <div className="font-bold my-2">name</div>
                    <div>{owner.name}</div>
                  </small>
                  }
                  {owner.organization &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">org</div>
                    <div>{owner.organization}</div>
                   </small>
                  }
                  {owner.email &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">email</div>
                    <div>{owner.email.split(" ")[0]}</div>
                    <div>{owner.email.split(" ")[1]}</div>
                   </small>
                  }
                  {owner.address &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">add:</div>
                    <div>{owner.address}</div>
                   </small>
                  }
                  {owner.city &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">city</div>
                    <div>{owner.city}</div>
                   </small>
                  }
                  {owner.fax &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">fax</div>
                    <div>{owner.fax}</div>
                   </small>
                  }
                  {owner.country && 
                  <small className="text-xs m-auto">
                    <div className="font-bold my-2">country</div>
                    <div>{owner.country}</div>
                  </small>
                  }
                  {owner.phone &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">phone</div>
                    <div>{owner.phone}</div>
                   </small>
                  }
                  {owner.created &&
                   <small className="text-xs m-auto">
                    <div className="font-bold my-2">created</div>
                    <div>{owner.created}</div>
                   </small>
                  }
                </small>
              ))
              :
              <small className="flex flex-col w-3/4 flex-wrap gap-2 whitespace-break-spaces">
                {getOwnerObj}
              </small>
        }
    </div>
  )
}

export default DomainOwnerAdmin