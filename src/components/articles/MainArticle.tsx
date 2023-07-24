"use client";

import React from 'react';
import {ArticalContextProvider} from "@context/GeneralContext";
import Article from "./Article";
import { useRouter } from 'next/router';

const MainArticle = ({ id }: { id: string | null }) => {
  return (
    <ArticalContextProvider>
        <Article id={id}/>
    </ArticalContextProvider>
    
  )
}

export default MainArticle