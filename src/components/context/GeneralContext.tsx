"use client";
import React, { useState, useRef, useEffect } from 'react'
import api from '../axios/api';
import {navLinkUltils,navLinkExtras,navLinkGames,navLinkHome} from "@/components/context/ExportNavLinks";
import {icons,iconType} from "./Icons";
import InfoIcon from "@mui/icons-material/Info";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {AxiosError,isAxiosError} from "axios";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from '@mui/icons-material/Explore';
import {allCategoryType,catWordSnippet,categoryType,categoryGeneralInfo,imageCategory,whyChoosUsType,articleType,articlesType,countryType} from "@context/Types";
import countriesArr from "@context/country.json";



type navType = {
    name: string,
    link: string
}[]
type navListType={
    name:string,
    link:string,
    icon: React.ReactElement<any, any>
}
export type navContextType={
    navs:navListType[],
}
export type generalContextType={
    allCategory:allCategoryType[],
    generalInfo:categoryGeneralInfo | null,
    whyChooseUs:whyChoosUsType[] | null,
    extraImages:imageCategory[] | null,
    termsOfService:catWordSnippet | null,
    setClose: React.Dispatch<React.SetStateAction<boolean>>,
    close:boolean
}
export type articlesContextType={
    articles:articlesType[] 
}
export type ultilType={
    getCountries:countryType[] | null
}
type mainCountryContext = {
    show:boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    showNative:boolean,
    setShowNative: React.Dispatch<React.SetStateAction<boolean>>,
    showLang:boolean,
    setShowLang: React.Dispatch<React.SetStateAction<boolean>>,
    showCurr:boolean,
    setShowCurr: React.Dispatch<React.SetStateAction<boolean>>,
    showDenom:boolean,
    setShowDenom: React.Dispatch<React.SetStateAction<boolean>>,
    }

    //====CREATE CONTEXT=======//
export const GeneralContext= React.createContext<mainCountryContext>({} as mainCountryContext);
export const CountryContext= React.createContext<mainCountryContext>({} as mainCountryContext);
export const UltilsContext=React.createContext<ultilType>({} as ultilType)
export const CategoryContext = React.createContext<generalContextType>({} as generalContextType);
export const ArticleContext = React.createContext<articlesContextType>({} as articlesContextType);
export const NavContext = React.createContext<navContextType>({} as navContextType);
//===========CREATE CONTEXT===============//

export const GeneralContextProvider = (props:any) => {
    const [close,setClose]=React.useState<boolean>(false);
    const [navs,setNavs]=React.useState<navListType[]>([]);
    const [allCategory,setAllCategory]=React.useState<allCategoryType[]>([]);
    const [generalInfo,setGeneralInfo]=React.useState<categoryGeneralInfo | null>(null);
    const [whyChooseUs,setWhyChooseUs]=React.useState<whyChoosUsType[] | null>(null);
    const [extraImages,setExtraImages]=React.useState<imageCategory[] | null>(null);
    const [termsOfService,setTermsOfService]=React.useState<catWordSnippet | null>(null);
    

  React.useEffect(()=>{
    let arr:navListType[]=[]
    navLinkUltils.forEach((nav,index)=>{
        arr.push({name:nav.name,link:nav.link,icon:<InfoIcon sx={{m:1,color:"blue"}}/>})
    });
    navLinkGames.forEach((nav,index)=>{
        arr.push({name:nav.name,link:nav.link,icon:<SportsEsportsIcon sx={{m:1,color:"green"}}/>})
    });
    navLinkHome.forEach((nav,index)=>{
        arr.push({name:nav.name,link:nav.link,icon:<HomeIcon sx={{m:1,color:"red"}}/>})
    });
    navLinkExtras.forEach((nav,index)=>{
        arr.push({name:nav.name,link:nav.link,icon:<ExploreIcon sx={{m:1,color:"red"}}/>})
    });
    setNavs(arr);
  },[]);

    const convertWhyChooseUs=React.useCallback((whyUs:categoryType[])=>{
        let arr:whyChoosUsType[]=[]
            whyUs.forEach((obj,index)=>{
                let getObj=icons.filter(ob=>(ob.name===obj.title))[0]
                arr.push({...obj,image:getObj.image});
            });
            return arr;
    },[]);
  //NEW----------------------/
 
  
  //*****THIS DOWNLOADS, RESUME,FAQS,WORDSNIPPETS,SERVICES DESCRIPTIONS,ETC*******//
  useEffect(() => {
    const getAllcategory = async () => {
      try {
        const res = await api.get('/category/');
        const body:allCategoryType[] = res.data;
        
        if (body && body?.length > 0) {
            setAllCategory(body);
            let generalInfor:categoryGeneralInfo | null=body.filter((obj:allCategoryType)=>(obj.name==="GeneralInfo"))[0].categoryGeneralInfo[0];
            if(generalInfor){
            setGeneralInfo(generalInfor);
            }
            let whyChooseUseTemp:categoryType[] | null= body.filter((obj)=>(obj.name==="AllServices"))[0].categories;
            
            if(whyChooseUseTemp){
                setWhyChooseUs(convertWhyChooseUs(whyChooseUseTemp));
            }
            let extraImagesTemp:imageCategory[] | null= body.filter((obj)=>(obj.name==="extraImages"))[0].imageCategory;
            if(extraImagesTemp){
                setExtraImages(extraImagesTemp);
            }
            let tempTermsOfsvc:catWordSnippet | null=body.filter((obj)=>(obj.section==="policy"))[0].catWordSnippet[0]
            if(tempTermsOfsvc){
                setTermsOfService(tempTermsOfsvc)
            }

        }
      } catch (error) {
        console.error(new Error("Did not return all categories"))
      }
    }
    getAllcategory();
  }, [convertWhyChooseUs]);

  return (
    <CategoryContext.Provider value={{allCategory,generalInfo,whyChooseUs,extraImages,termsOfService,close,setClose}}>
    <NavContext.Provider value={{navs}}>
        {props.children}
      </NavContext.Provider>
    </CategoryContext.Provider>
  )
}
export const ArticalContextProvider = (props:any) => {
    const [articles,setArticles]=React.useState<articlesType[]>([]);

    React.useEffect(()=>{
        const getArticles=async()=>{
            try {
                const res = await api.get("/blog/articles/");
                const body:articlesType[]= res.data;
                setArticles(body);
                // console.log(body)
            } catch (error) {
                console.error(new Error("did not return articles"))
            }
        }
        getArticles();
      },[]);
    //   console.log(articles)
    return(
        <ArticleContext.Provider value={{articles}}>
            {props.children}
        </ArticleContext.Provider>

    )
}

export const UltilsContextProvider=(props:any)=>{
    const [getCountries,setGetCountries]=React.useState<countryType[] | null>(null);
    React.useMemo(() => {
        let allCountries: countryType[] | null = countriesArr;
        setGetCountries(allCountries);
}, []);
    return(
        <UltilsContext.Provider value={{getCountries}}>
            {props.children}
        </UltilsContext.Provider>
    )
}
//-----COUNRY CONTEXT----------//
export const CountryContextProvider = (props:any) => {
    const [show,setShow]=React.useState<boolean>(false);
    const [showNative, setShowNative] = React.useState<boolean>(false);
  const [showLang, setShowLang] = React.useState<boolean>(false);
  const [showCurr, setShowCurr] = React.useState<boolean>(false);
  const [showDenom, setShowDenom] = React.useState<boolean>(false);
  return (
    <CountryContext.Provider value={{show,setShow,showNative, setShowNative,showLang, setShowLang,showCurr, setShowCurr,showDenom, setShowDenom}}>
        {props.children}
    </CountryContext.Provider>
  )
}