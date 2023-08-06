"use client";
import React from 'react';
import { navLinkUltils } from '@nav/Nav';
import { Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';

type navGamesType = {
  id:number,
  name: string,
  link: string,
  image: string,
  desc:string
}
type imageType = {
  id:number,
  image: string,
  name: string,
  desc:string
}
const Ultils = () => {
  const URL =process.env.NEXT_PUBLIC_aws
  const staticImage=process.env.NEXT_PUBLIC_aws_static
  const webtoon = `${URL}/summer.png`;
  const ninja = `${URL}/webtoon2.png`;
  const rawio = `${URL}/games.png`;
  const countries = `${staticImage}/book.png`;
  const [navGames, setNavGames] = React.useState<navGamesType[] | []>([]);

  React.useEffect(() => {
    const images: imageType[] = [
      {id:1, name: "currency", image: rawio ,desc:" This displays all the world's currencies. In addition, it provides ratios to base currencies. the currencies are daily updated to give the most current currency status."},
     {id:1, name: "weather", image: webtoon ,desc:" This provides the viewer free access to view all world-cities daily weather forcast.This ultility also provides easy citie search by countries."},
     {id:1, name: "translate", image: ninja ,desc:"This provides a 40-line line translation to any desired language." },
     {id:1, name: "countries", image: countries ,desc:"This provides all world country's general information from populations to telephone prefixes." },
     {id:1, name: "techtool", image: webtoon ,desc:"This allows you to verify emails,DNS lookups and domain verification." },
  ]
    let arr: navGamesType[] = [];
    navLinkUltils.forEach((nav, index) => {
      if (nav.name !== "ultils") {
        const image = images.filter(obj => (obj.name === nav.name))[0]
        arr.push({id:nav.id, name: nav.name, link: nav.link, image:image.image,desc:image.desc })
      }
    });
    setNavGames(arr.sort((a,b)=>b.id - a.id))

  }, [rawio,webtoon,ninja,countries]);

  return (
    <div className="lg:mx-auto lg:container bg-[rgba(255,255,255,0.8)] text-black dark:bg-black dark:text-white">
      <div className="m-auto grid grid-cols-1 grid-flow-row-dense lg:grid-cols-3 gap-2 place-items-stretch hover:place-items-center">
        {navGames?.filter(obj => (obj.name !== "games")).map((obj, index) => (
          <Link href={obj.link} className="m-auto w-full flex flex-col  min-h-[20vh] bg-cyan-500 border rounded-xl bg-slate_blue" key={`${index}-${obj.name}`}>
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-7">
            <Image src={obj.image} width={75} height={75} alt="www.masterconnect.ca"
                className="rounded-[50%]"
              />
              <h3 className="text-2xl text-center text-white antialiased font-bold leading-10">{obj.name}</h3>
              
            </div>
            <p className="text-lg mx-1 my-2 indent-3 text-white">{obj.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Ultils