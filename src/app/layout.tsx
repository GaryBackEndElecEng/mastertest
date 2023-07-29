import './globals.css';
import "@nav/nav.css";
import "@home/home.css";
import "@ultils/translate/translate.css";
import { Inter, Montserrat,Chela_One } from 'next/font/google';
import Nav from '../components/nav/Nav';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
// import Head from 'next/head';



//font-family classes-Inter and montserrat Google Fonts
const inter = Inter({ subsets: ['latin'],weight:["500"] })
const montserr = Montserrat({ subsets: ['latin-ext'],weight:["500"] })

export const metadata = {
  metadataBase:new URL("https://www.masterultils.com"),
  title:{
    default:"masterUltils",
    template:`%s | masterUltils`,

  },
  verification: {
    google: 'OQ6Dp84IAi3mrQ4H7bz1rHkVDSn532jFujcjf9wmrYA',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      name: ['masterconnect919@gmail.com', 'https://www.masterconnect.ca/contact'],
    },
  },
  
  description: 'Generated by www.masterconnect.ca,Free Tools for you.',
  generator:"Next.js",
  applicationName:"master ultilities",
  referrer:"origin-when-cross-origin",
  keywords:["master ultilities","tools for you","web design info","something"],
  authors:[{name:"Gary Wallace",url:"https://www.masterconnect.ca"}],
  // colorScheme:"light",
  creator:"Gary Wallace",
  publisher:"Gary Wallace",
  formatDetection:{
    email:true,
    address:false,
    telephone:true
  },
  openGraph:{
    title:"Master ultils",
    description: 'Generated by www.masterconnect.ca,tools for you',
    url:"https://www.masterultils.ca",
    siteName:"masterultils",
    images:[
      {
      url:"https://new-master.s3.ca-central-1.amazonaws.com/static/masterultils/masterUltils1800_800.png",
    width:1800,
    height:800
      },
      {
      url:"https://new-master.s3.ca-central-1.amazonaws.com/static/masterultils/masterUltils800_400.png",
    width:800,
    height:400
      },
      {
      url:"https://new-master.s3.ca-central-1.amazonaws.com/static/masterultils/happy.png",
    width:100,
    height:100
      },
    ],
    locale:"en-CA",
    type:"website"

  },
  robots: {
    index: false,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons:{
    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
      apple: '/icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.png',
      },
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1025.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2051.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  
  // manifest: '/manifest.json',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" > 
      <body className={`${montserr.className} h-auto m-0 relative bg-[rgba(255,255,255,0.7)] text-black `} style={{width:"100vw"}}>
     
      <Nav/>
      <Header/>
        {children}
        <Footer/>
        
      </body>
      
    </html>
    
  )
}
