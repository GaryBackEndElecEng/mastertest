"use client";
import React from 'react';
import {ThemeProvider} from 'next-themes';
import { navLinkExtras } from '@nav/Nav';
import { Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
// import type {Metadata} from 'next';
// import {metaextra} from '../../components/metadata/metadata';

type paraType={
  para:string
}

type navGamesType = {
  name: string,
  link: string,
  image: string,
  desc:paraType[]
}

type imageType = {
  image: string,
  name: string,
  desc:paraType[]
}
const Extras = () => {
  const staticImage = process.env.NEXT_PUBLIC_aws;
  const directGraph = `${staticImage}/directGraph3.png`;
  const graph = `${staticImage}/graph.png`;
  const [navGames, setNavGames] = React.useState<navGamesType[] | []>([]);
  
  React.useEffect(()=>{
    if(window.scrollY){
      window.scroll(0,0);
    }
  },[]);

  React.useEffect(() => {
    const images: imageType[] = [
      { name: "charts", image: graph ,desc:[{para:" This allows you to generate your custom graphs for a project. The display graph is an image so you can copy the image from the template, once completed and simply paste it into your project."},{para:" You have an option of a bar, pie, donut, radar, or line graph."},{para:" The graph comes with multiple input, as well as a summary and legend for easy customization."}]},
     { name: "directgraph", image: directGraph ,desc:[{para:" This allows you to generate a flow chart as is easily transferrable to your project from a simple copy and paste method."},{para:" The system allows you to visually build your flow-chart, one node/(process and arrow) at a time."}]},
     
  ]
    let arr: navGamesType[] = [];
    navLinkExtras.forEach((nav, index) => {
      if (nav.name !== "extra") {
        const image = images.filter(obj => (obj.name === nav.name))[0]
        arr.push({ name: nav.name, link: nav.link, image:image.image,desc:image.desc })
      }
    });
    setNavGames(arr)

  }, [graph,directGraph]);

  return (
    <ThemeProvider attribute="class">
    <div className="lg:mx-auto lg:container dark:bg-black dark:text-white bg-white text-black ">
      <div className="m-auto grid grid-cols-1 grid-flow-row-dense lg:grid-cols-2 gap-2 place-items-stretch hover:place-items-center ">
        {navGames?.filter(obj => (obj.name !== "games")).map((obj, index) => (
          <Link href={obj.link} className="m-auto w-full flex flex-col  min-h-[20vh]  border rounded-xl bg-site_blue_dark dark:bg-black dark:text-white" key={`${index}-${obj.name}`}>
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-7">
            <Image src={obj.image} width={85} height={85} alt="www.masterconnect.ca"
                className="rounded-[50%]"
              />
              <h3 className="text-2xl text-center text-white antialiased font-bold leading-10">{obj.name}</h3>
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-2">
              {obj.desc.map((obj,index)=>(
                <p className="text-lg mx-1 my-2 indent-3 text-white px-1 colums-2" key={index}>{obj.para}</p>
              ))}
            </div>
            
          </Link>
        ))}
      </div>
    </div>
    </ThemeProvider>
  )
}

export default Extras