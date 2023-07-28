"use client";
import React from 'react';
import {CountryContextProvider} from "@/components/context/GeneralContext";
import CountryItem from "@/components/countries/CountryItem";
import {useSearchParams} from "next/navigation";

const CountryDetail = () => {
    const searchParams=useSearchParams();
    const name=searchParams.get("name") ;
  return (
    <CountryContextProvider>
    <div className="lg:mx-auto lg:container ">
        <CountryItem name={name} />
        
    </div>
    </CountryContextProvider>
  )
}

export default CountryDetail