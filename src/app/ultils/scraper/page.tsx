import CombinedForm from "./CombinedForm";
import Image from 'next/image';

const Scraper = () => {
  const staticImage=process.env.NEXT_PUBLIC_aws
  const scrape = `${staticImage}/scrape.png`;
  return (
    <div className=" w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
      <div className="mx-auto col-span-1 ">
      <Image src={scrape} width={400} height={400} alt="www.masterconnect.ca"/>
      </div>
      <div className="mx-auto lg:col-span-2 col-span-1 ">
      <CombinedForm/>
      </div>
      <div className="mx-auto span-col-1   ">
            <Image src={scrape} width={400} height={400} alt="www.masterconnect.ca"/>
      </div>
    </div>
    </div>
  )
}

export default Scraper