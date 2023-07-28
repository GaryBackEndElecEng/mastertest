
// import React from 'react';

import CountryDetail from "./CountryDetail";
import {metacountry} from '@component/metadata/metaultils';
import type {Metadata} from 'next';
export const metadata:Metadata=metacountry;

const Page = () => {
   
   
  return (
    
    <div className="lg:mx-auto lg:container ">
        <CountryDetail />
        
    </div>
   
  )
}

export default Page