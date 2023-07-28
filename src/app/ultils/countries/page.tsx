"use client";
import React from 'react';
import MasterCountry from '@/components/countries/MasterCountry';
import {CountryContextProvider} from "@/components/context/GeneralContext";
import {metacountries} from '@component/metadata/metaultils';

import type {Metadata} from 'next';
export const metadata:Metadata=metacountries;

const countries = () => {
  return (
    <CountryContextProvider>
    <MasterCountry/>
    </CountryContextProvider>
  )
}

export default countries