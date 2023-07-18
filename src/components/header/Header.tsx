import React from 'react';
import styles from "./header.module.css"

const Header = () => {
  const URL = process.env.NEXT_PUBLIC_aws;
    const headerImage:string=`${URL}/header.png`;
    
  return (
    <main 
    className={`${styles.masterHeader}`}
    style={{backgroundImage:`url(${headerImage})`,zIndex:"0"}}
    >
      <div className="grid  place-items-center absolute top-[25%] left-[10%] md:top-[30%] lg:top-2  md:left-[25%] lg:left-[5%] z-[0] border">
        <div>
       <h2 className={`text-center text-white m-auto text-xl md:text-3xl  `}>Thank you for visiting Us!</h2>
       <h3 className="animate-pulse text-xl lg:text-xl text-white mt-1 lg:mt-10 p-2 bg-[rgba(0,0,0,0.6)]">masterconnect.ca @ masterultils</h3>
       </div>
       </div>
    </main>
  )
}

export default Header