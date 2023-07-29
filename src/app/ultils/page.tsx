import Ultils from "@ultils/Ultils";
import {metaultils} from '@component/metadata/metaultils';
import type {Metadata} from 'next';
export const metadata:Metadata=metaultils;

const page = () => {
  return (
    <div className="lg:mx-auto lg:container mt-2">
      <Ultils/>
    </div>
  )
}

export default page