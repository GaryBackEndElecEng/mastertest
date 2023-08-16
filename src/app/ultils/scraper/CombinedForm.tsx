
"use client";
import React, { MouseEvent, ChangeEvent } from 'react'
import InputFormAmazon from "@/components/ultils/scraper/InputFormAmazon";
import InputFormWebSite from "@/components/ultils/scraper/InputFormWebSite"


type selectorType = {
  data: "amazon" | "website" | "none",
  loaded: boolean
};
type selectType = "amazon" | "website" | "none";

const CombinedForm = () => {
  const [select, setSelect] = React.useState<string>("none")
  const [selector, setSelector] = React.useState<{ loaded: boolean, data: string | null }>({ loaded: false, data: null });

  const selectArr = ["none", "amazon", "website"];

  const handleSelect = async (e: MouseEvent) => {
    e.preventDefault();
    setSelector({ loaded: true, data: select });
  };



  return (
    <div className="flex flex-col justify-center items-center w-full shadow-lg shadow-blue px-1">

      {selector && selector.loaded && selector.data === "amazon" && <InputFormAmazon />}
      {selector && selector.loaded && selector.data === "website" && <InputFormWebSite />}
      <div className="flex flex-col mx-auto container items-center">
        <select
          id={"select"}
          value={select}
          className="px-4 py-2 rounded-lg shadow-md shadow-blue text-blue dark:text-white bg-white dark:bg-black"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelect(e.target.value)}
        >
          {
            selectArr.map((sel, index) => (
              <option value={sel} key={index}>{sel}</option>
            ))
          }
        </select>
      </div>
      <button className="flex flex-col px-4 py-2 items-center justify-center rounded-lg border rounded-[15%] border-blue" onClick={(e) => handleSelect(e)}> submit</button>
    </div>

  )
}

export default CombinedForm