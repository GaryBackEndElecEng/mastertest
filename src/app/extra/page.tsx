

import Extras from '@extra/Extras'
import type {Metadata} from 'next';
import {metaextra} from '../../components/metadata/metaextra';

export const metadata =metaextra;

//extra
const page = () => {
  return (
    <div className="lg:mx-auto lg:container ">
      <Extras/>
    </div>
  )
}

export default page