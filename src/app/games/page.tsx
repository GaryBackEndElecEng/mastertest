import Games from '../../components/games/Games';
import {metagames} from '@component/metadata/metagames';
import type {Metadata} from 'next';

export const metadata:Metadata=metagames;

const page = () => {
  return (
    <div className="lg:mx-auto lg:container">
      <Games/>
    </div>
  )
}

export default page