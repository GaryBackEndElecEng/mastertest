import {getServerSession} from "next-auth";
import authOptions from "@context/options";
import AllPosts from "@component/posts/AllPosts";
import type {Metadata} from 'next';
import {metaposts} from "@component/metadata/metaposts";

export const metadata:Metadata=metaposts;

export default async function Posts() {
  const session=await getServerSession(authOptions)
  const imgSrc=(session && session.user && session.user.image) ? session.user.image :null;
  const adminemail=process.env.NEXT_PUBLIC_adminemail
  const adminuser=process.env.NEXT_PUBLIC_adminuser
  const check=(session?.user?.email===adminemail && session?.user?.name===adminuser) ? true : false
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mt-12 ">

   <div className="flex flex-col items-center justify-center">
    
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center my-3 mx-auto">
      
      <a href={"/dashboard"} className="m-auto shado shadow-blu-600 rounded-lg px-4 py-2">
        <button className="border blue m-auto p-2"> dashboard</button>
      </a>
      {check && <a href={"/admin"} className="m-auto shado shadow-blu-600 rounded-lg px-4 py-2">
        <button className="border blue m-auto p-2"> admin</button>
      </a>}
    </div>
   </div>
   <AllPosts imgSrc={imgSrc}/>
    </main>
  )
}