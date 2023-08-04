import React from 'react'
type keyType={
    value:string,
    sources:string[],
}
 export type getScrapType={
domain?:string,
emails?:keyType[],
phone_numbers?:keyType[],
facbook?:string,
intagram?:string,
tiktok?:string,
snapchat?:string,
linkedln?:string,
github?:string,
youtube?:string,
pinterest?:string
}

const getscraped =async (domain:string,emailMatch:string):Promise<getScrapType | undefined> => {
    const url = `https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query=${domain}&match_email_domain=${emailMatch}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '512e19eb3cmsh0b9bf8c65edd50ep11ae4bjsn9a01883aacf8',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const body=JSON.parse(result)

        console.log("body.data",body.data);
        const bodyReal:getScrapType=body.data[0];
        return bodyReal
    } catch (error) {
        console.error(error);
    }
}

export default getscraped