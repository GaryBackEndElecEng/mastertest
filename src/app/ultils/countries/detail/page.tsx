"use client";
// import React from 'react';
import {useSearchParams} from "next/navigation";
import CountryItem from "@/components/countries/CountryItem";
import {CountryContextProvider} from "@/components/context/GeneralContext";
import {metacountry} from '@component/metadata/metaultils';
import type {Metadata} from 'next';
export const metadata:Metadata=metacountry;

const Page = () => {
    const searchParams=useSearchParams();
    const name=searchParams.get("name") 
   
  return (
    <CountryContextProvider>
    <div className="lg:mx-auto lg:container ">
        <CountryItem name={name} />
        
    </div>
    </CountryContextProvider>
  )
}

export default Page