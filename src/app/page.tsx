import Image from 'next/image';
import HomeBody from '@home/HomeBody';



export default function Home() {
  const URL = process.env.NEXT_PUBLIC_aws
  const happy=`${URL}/happy.png`;
  const logo=`${URL}/logoLarge.png`;
  return (
    <div className="lg:container lg:mx-auto">
      <div className=" my-1 mx-0 lg:mx-auto">
        
      <p className="text-3xl text-center mx-auto whitespace-normal">Useful Tools and Resources For You,  complements of:   
       </p>
       <div className="h-[3px] w-full my-2" style={{background:"grey"}}/>
       <div className="relative p-1 my-2">
       
       <div className="grid grid-cols-1 lg:grid-cols-5 placeItems-center relative gap-3">
        
       <Image src={logo} width={85} height={85} alt="www.masterconnect.ca"
        className=" mx-auto col-span-1 "
        />
        <div className="col-span-3 mx-auto ">
        <p className="text-3xl text-center m-auto whitespace-normal text-indigo-500 font-bold">www.masterconnect.ca</p>
        </div>
       <Image src={happy} width={85} height={85} alt="www.masterconnect.ca"
        className=" mx-auto col-span-1 "
        />
       
        </div>
       </div>
       </div>
    <HomeBody/>
    </div>
    
  )
}
