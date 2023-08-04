import React from 'react';


export type ownerType={
  handle?:string ,
  type?:string ,
  name?:string ,
  organization?:string ,
  email?:string,
  address?:string ,
  zipcode?:string ,
  city?:string ,
  state?:string ,
  country?:string,
  phone?:string ,
  fax?:string ,
  created?:string ,
  changed?:string 
} 
export type contactType={
  handle?:string | null,
  type?:string | null,
  name?:string | null,
  organization?:string | null,
  email?: string,
  address?:string | null,
  zipcode?:string | null,
  city?:string | null,
  state?:string | null,
  country?:string | null,
  phone?:string | null,
  fax:string | null,
  created?:string | null,
  changed?:string | null
}[] 
type registrarType={
  id?: string,
  name?: string,
  email?: string | null,
  url?: string | null,
  phone?: string |null
}

export type whoDomainType={
  server?:string,
  name:string |null,
  idnName:string | null,
  status?:string[],
  nameserver?:string[],
  ips?:string[] | null | string,
  created?:string,
  changed?:string,
  expires?:string | null,
  registered?:boolean,
  dnssec?:boolean,
  contacts?:contactType ,
   whoisserver?:string,
  registrar?:registrarType,
  rawdata?:string[],
  network?:string | null,
  exception?:string | null,
  parsedContacts?:boolean,
}

const getDomainInfo = async(domain:string):Promise<whoDomainType | undefined> => {

    const url = `https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=${domain}&format=json&_forceRefresh=0`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '512e19eb3cmsh0b9bf8c65edd50ep11ae4bjsn9a01883aacf8',
        'X-RapidAPI-Host': 'zozor54-whois-lookup-v1.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const body:whoDomainType = JSON.parse(result)
        // console.log(body);
        return body
    } catch (error) {
      if(error){
        console.error(error);
      }else{ console.error(new Error(" did not recieve data"))}
    }
}

export default getDomainInfo