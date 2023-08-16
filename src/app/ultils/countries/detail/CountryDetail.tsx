"use client";
import React from 'react';
import {CountryContextProvider} from "@/components/context/GeneralContext";
import CountryItem from "@/components/countries/CountryItem";
import {useSearchParams,ReadonlyURLSearchParams} from "next/navigation";

const CountryDetail = () => {
    const searchParams : ReadonlyURLSearchParams | null=useSearchParams();
    const name=searchParams ? searchParams.get("name") : null ;
  return (
    <CountryContextProvider>
    <div className="lg:mx-auto lg:container ">
        <CountryItem name={name} />
        
    </div>
    </CountryContextProvider>
  )
}

export default CountryDetail