"use client";
import React from 'react'
import NavLink from './NavLink';
import "./nav.css";


type navType = {
    navArr:{
        
    name: string,
    link: string
        
    }[]
}

const NavArray = ({navArr}:navType) => {
    
  return (
    <div className="navLinkgroup flex flex-col bg-[#74B3CE] lg:opacity-80 lg:hover:opacity-100 lg:hover:transition-all lg:hover:ease-in lg:hover:duration-500 w-full ">
        {navArr.map((obj,index)=>(
            <div key={index} style={{width:"100%"}} className="parentLink my-1  lg:my-0">
                <NavLink obj={obj}/>
            </div>
        ))}

    </div>
  )
}

export default NavArray