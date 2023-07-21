import React from 'react'
import Contact from '../../components/contact/Contact';
import type {Metadata} from 'next';
import {metacontact} from "../../components/metadata/metacontact";

export const metadata:Metadata=metacontact;



const contact = () => {
  return (
    <div className="bg-[whitesmoke] w-full">
        <Contact/>
    </div>
  )
}

export default contact