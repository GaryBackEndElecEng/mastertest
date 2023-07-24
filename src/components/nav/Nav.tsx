
import NavArray from "./NavArray";
import Image from 'next/image';
import React, {MouseEvent} from 'react';

// import "./nav.css"

type navType = {
    name: string,
    link: string
}[]

export const navLinkGames: navType = [
    { name: "games", link: "/games" },
    { name: "webtoon", link: "/games/webtoon" },
    { name: "rawio", link: "/games/rawio" },
    { name: "slang-word", link: "/games/slang-word" },
    
]
export const navLinkUltils: navType = [
    { name: "ultils", link: "/ultils" },
    { name: "weather", link: "/ultils/weather" },
    { name: "translate", link: "/ultils/translate" },
    { name: "currency", link: "/ultils/currency" },
    
]
export const navLinkExtras: navType = [
    { name: "extra", link: "/extra" },
    { name: "charts", link: "/extra/chart" },
    { name: "directgraph", link: "/extra/directgraph" },
    
]
export const navLinkHome: navType = [
    { name: "home", link: "/" },
    { name: "contact", link: "/contact" },
    { name: "masterconnect", link: "https://www.masterconnect.ca" },
    { name: "articles", link: "/articles" },
    
    
]
const Nav = () => {
    
    const URL = process.env.NEXT_PUBLIC_aws;
    const logo: string = `${URL}/logo.png`
    
    
    return (
        <nav className="mainNav relative top-0 left-0 right-0 lg:bg-blue w-full min-h-[100px]">
            <main className="subMainNav  lg:flex  lg:flex-row lg:justify-around lg:items-center lg:gap-10 ">
                <section className="logoContainer  m-auto relative rounded-full lg:basis-1/5 ">
                    <Image src={logo} alt="www.masterconnect.ca" height={75} width={75}
                    className="image lg:p-1"
                    />
                    
                    <div className="masterultils absolute">
                     <h4 className=" text-lg p-1 m-auto">Masterultils</h4>
                     </div>
                </section>
                <section className={"mainLinkgroup basis-4/5 lg:block w-full "}>
                    <div className="subNavLinkgroup flex lg:flex-row justify-around gap-1 w-full ">
                        <ul className="subNavLinks relative flex flex-col justify-center items-center w-full text-lg -[100px] p-2 lg:w-1/6 lg:border lg:border-white radial-blue ">
                            <h3 className="text-site-green-dark">home</h3>
                            <ul className="prose w-full p-2 absolute">
                                <NavArray navArr={navLinkHome}/>
                            </ul>
                        </ul>
                        <ul className="subNavLinks  relative flex flex-col justify-center items-center w-full text-lg -[100px] p-2 lg:w-1/6  lg:border lg:border-white">
                            <h3 className="text-site-green-dark">games</h3>
                            <ul className="prose w-full p-2 absolute">
                                <NavArray navArr={navLinkGames}/>
                            </ul>
                        </ul>
                        <ul className="subNavLinks relative flex flex-col justify-center items-center  w-full text-lg -[100px] p-2 lg:w-1/6  lg:border lg:border-white">
                            <h3 className="text-site_green_dark">ultils</h3>
                            <ul className="prose w-full p-2 absolute">
                            <NavArray navArr={navLinkUltils}/>
                            </ul>
                        </ul>
                        <ul className="subNavLinks relative flex flex-col justify-center items-center w-full text-lg -[100px] p-2 lg:w-1/6  lg:border lg:border-white">
                            <h3 className="text-site_green_dark">extras</h3>
                            <ul className="prose w-full p-2 absolute">
                            <NavArray navArr={navLinkExtras}/>
                            </ul>
                        </ul>
                    </div>
                </section>
            </main>
        </nav>
    )
}

export default Nav