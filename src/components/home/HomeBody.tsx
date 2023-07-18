import React from 'react';
import Image from "next/image";
// import "./home.css"
import HomeAnchor from "./HomeAnchor";

const HomeBody = () => {
  const URL = process.env.NEXT_PUBLIC_aws;
  const web = `${URL}/webService.png`;
  const games = `${URL}/games.png`;
  const ultils = `${URL}/ultils.png`;
  const extras = `${URL}/graph2.png`;
  const imageDecorate:string="aspect-video rounded-[50%] static top-[15%] left-[20%] h-[auto]";
  const imageDecorate2:string="aspect-video rounded-[30%] static top-[15%] left-[20%] h-[auto]";
  const gridSpans:string="card grid-spans-1/3 h-[400px] w-[400px] border-4 border-indigo-500 grid place-items-center bg-indigo-500 relative ";

  return (
    <main className="lg:container lg:mx-auto my-6 mt-[5rem]">
      <section className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-4 xs:gap-2 w-full">
        <div className={gridSpans} style={{boxShadow:"1px 1px 20px 1px black"}} >
          <Image src={web} width={175} height={175} alt="www.masterconnect.ca"
          className={imageDecorate2}
          style={{height:"auto"}}
          />
          <HomeAnchor href={"https://www.masterconnect.ca"} title={"Custom"} title2={"Web Design"} />
        </div>
        <div className={gridSpans} style={{boxShadow:"1px 1px 20px 1px black"}} >
        <Image src={games} width={155} height={155} alt="www.masterconnect.ca"
          className={imageDecorate}
          style={{height:"auto"}}
          />
          <HomeAnchor href={"/games"} title={"Games for"} title2={"the Mind"} />
        </div>
        <div className={gridSpans} style={{boxShadow:"1px 1px 20px 1px black"}} >
        <Image src={ultils} width={155} height={155} alt="www.masterconnect.ca"
          className={imageDecorate}
          style={{height:"auto"}}
          />
          <HomeAnchor href={"/ultils"} title={"Useful"} title2={"Ultilities"} />
        </div>
        <div className={gridSpans} style={{boxShadow:"1px 1px 20px 1px black"}} >
        <Image src={extras} width={155} height={155} alt="www.masterconnect.ca"
          className={imageDecorate}
          style={{height:"auto"}}
          />
          <HomeAnchor href={"/extra"} title={"Extras/Graphs"} title2={"of interest"} />
        </div>
      </section>
    </main>
  )
}

export default HomeBody