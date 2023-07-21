"use client";
import React from 'react';
import {ThemeProvider} from 'next-themes'
import { navLinkGames } from '@nav/Nav';
import { Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';

type navGamesType = {
  name: string,
  link: string,
  image: string,
  desc:string
}
type imageType = {
  image: string,
  name: string,
  desc:string
}
const Games = () => {
  const URL =process.env.NEXT_PUBLIC_aws
  const webtoon = `${URL}/webtoon1.png`;
  const ninja = `${URL}/slang.png`;
  const rawio = `${URL}/games.png`;
  const [navGames, setNavGames] = React.useState<navGamesType[] | []>([]);

  React.useEffect(() => {
    const images: imageType[] = [
      { name: "rawio", image: rawio ,desc:" This displays all video games. It allows the viewer to take an inside look of the game. In addition, it has store links for quick purchases"},
     { name: "webtoon", image: webtoon ,desc:" This gives the viewer a short insight on webtoons and shows the webtoon types."},
     { name: "slang-word", image: ninja,desc:"This interfaces with a universal definition of slang words.It gives you the best definition of known english saying, voted by the public." },
  ]
    let arr: navGamesType[] = [];
    navLinkGames.forEach((nav, index) => {
      if (nav.name !== "games") {
        const image = images.filter(obj => (obj.name === nav.name))[0]
        arr.push({ name: nav.name, link: nav.link, image: image.image,desc:image.desc })
      }
    });
    setNavGames(arr)

  }, [webtoon,ninja,rawio]);

  return (
    <ThemeProvider attribute="class">
    <div className="lg:mx-auto lg:container dark:bg-black dark:text-white bg-white text-black">
      <div className="m-auto grid grid-cols-1 grid-flow-row-dense lg:grid-cols-3 gap-2 place-items-stretch hover:place-items-center">
        {navGames?.filter(obj => (obj.name !== "games")).map((obj, index) => (
          <Link href={obj.link} className="m-auto w-full flex flex-col  min-h-[20vh] bg-cyan-500 border rounded-xl bg-site_blue_dark" key={`${index}-${obj.name}`}>
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-7">
            <Image src={obj.image} width={75} height={75} alt="www.masterconnect.ca"
                className="rounded-[50%]"
              />
              <h3 className="text-2xl text-center text-white antialiased font-bold leading-10">{obj.name}-game</h3>
              
            </div>
            <p className="text-xl mx-1 p-2 my-2 indent-3 text-white">{obj.desc}</p>
          </Link>
        ))}
      </div>
    </div>
    </ThemeProvider>
  )
}

export default Games