import Image from 'next/image';
import HomeBodyNew from '@home/HomeBodyNew';




export default function Home() {
  const URL = process.env.NEXT_PUBLIC_aws
  const happy = `${URL}/happy.png`;
  const logo = `${URL}/logoLarge.png`;
  return (
    <div className="lg:container lg:mx-auto">
      <HomeBodyNew />
    </div>

  )
}
