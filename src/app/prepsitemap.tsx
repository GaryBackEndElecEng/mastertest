"use server"
import {navLinkGames,navLinkUltils,navLinkExtras,navLinkHome} from '../components/nav/Nav';

export type navType={
    name:string,
    link:string
}
export type promiseType={
    url:string,
    lastModified:Date
}
export async function genArr():Promise<promiseType[]>{
    const site=(process.env.NODE_ENV==='production') ? process.env.NEXT_PUBLIC_masterultils :"http://localhost:3000";
    let arr:promiseType[]=[];
    navLinkGames.forEach((obj)=>{
        arr.push({url:`${site}${obj.link}`,lastModified: new Date()})
    });
    navLinkUltils.forEach((obj)=>{
        arr.push({url:`${site}${obj.link}`,lastModified: new Date()})
    });
    navLinkExtras.forEach((obj)=>{
        arr.push({url:`${site}${obj.link}`,lastModified: new Date()})
    });
    navLinkHome.forEach((obj)=>{
        arr.push({url:`${site}${obj.link}`,lastModified: new Date()})
    });
   
   return arr
    
    
}