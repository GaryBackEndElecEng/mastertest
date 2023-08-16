"use client";
import React from 'react';
import styles from "./header.module.css";
import {ThemeProvider} from 'next-themes';
import ColorBtn from './ColorBtn';

const Header = () => {
  const URL = process.env.NEXT_PUBLIC_aws;
    // const headerImage:string=`${URL}/header.png`;
    const headerImage:string=`${URL}/bg_navada.png`;
    
  return (
    <ThemeProvider attribute="class">
    <main 
    className={styles.masterHeader}
    style={{backgroundImage:`url(${headerImage})`,zIndex:"0",position:"relative"}}
    >
      <div className="relative z-5000 right-2 top-[20%]  sm:top-[20] lg:right-10 lg:top-3 shadow shadow-blue rounded-lg z-500000">
      <ColorBtn/>
      </div>
     
      <div className="grid  place-items-center absolute top-[65%] left-[0%] md:top-[45%] lg:top-2  md:left-[25%] lg:left-[5%] z-[0] border">
        <div>
       <h2 className={`text-center text-white m-auto text-xl md:text-3xl  `}>Thank you for visiting Us!</h2>
       <h3 className="animate-pulse text-xl lg:text-xl text-white mt-1 lg:mt-10 p-2 bg-[rgba(0,0,0,0.6)]">masterconnect.ca @ masterultils.ca</h3>
       </div>
       </div>
       
    </main>
    </ThemeProvider>
  )
}

export default Header