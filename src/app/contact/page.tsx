import React from 'react'
import Contact from '../../components/contact/Contact';
import type {Metadata} from 'next';


export const metadata:Metadata={
  
  title:{
    default:"Contact",
    template:`%s | Contact`,

  },
  description:"Our contact page",
  keywords:["contact page","tools for you","web design info","contact information"],
  // authors:[{name:"Gary Wallace",url:"https://www.masterconnect.ca"}],
  colorScheme:"light",
  alternates:{
    canonical:"/contact",
    languages:{
      "en-US":"/en-US",
      "fr-CA":"/fr-CA"
    }
  },
  openGraph:{
    title:"masterultils contact",
    description: 'masterultils contact page',
    url:"/contact",
    images:[
      {
        url:"https://new-master.s3.ca-central-1.amazonaws.com/static/masterultils/webService.png",
        width:600,
        height:300
    },
      {
        url:"https://new-master.s3.ca-central-1.amazonaws.com/static/masterultils/logoLarge.png",
        width:600,
        height:900
    },
  ],

  }
 
}

const contact = () => {
  return (
    <div className="bg-[whitesmoke] w-full">
        <Contact/>
    </div>
  )
}

export default contact