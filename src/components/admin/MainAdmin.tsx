"use client";
import React from 'react';
import type { userType} from "@component/context/type";
import type { Session} from "next-auth";
import {useRouter} from "next/navigation";
import {convertDate} from "@component/ultilities";
import DeleteUpdate from "./DeleteUpdate";
import {GeneralContext} from "@component/context/GeneralContextProvider";

type mainAdminType={
  session:Session,
  
}
const MainAdmin = ({session}:mainAdminType) => {
  const {users}=React.useContext(GeneralContext);
  const router=useRouter();
  return (
    <div className="p-10 flex flex-col justify-center items-center gap-3 w-full">
        <h2 className="text-lg text-center font-bold">Main Client Admin</h2>
        <h2 className="text-md text-center">{session?.user?.name}</h2>
        <h2 className="text-md text-center">{session?.user?.email}</h2>
        <div className="flex flex-col items-center justify-center">
          <button className="py-1 px-3 rounded-md shadow-md shadow-blue-500" onClick={()=>router.push("/")}>
            return
          </button>
        </div>
        <h2 className="text-md text-center text-blue-600 font-bold">count:{users.length}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2 p-3 gap-3 place-items-center place-content-center mt-6">
          {users.map((user,index)=>(
            <div className="col-span-1 mx-auto flex flex-col items-center justify-center shadow-md rounded-lg shadow-blue-500 py-1 px-3 w-full" key={`${index}-user`}>
              <h2 className="text-lg m-0 py-2 font-bold">(.{index+1} name/email</h2>
              <h2 className="text-lg m-0 py-2">{user.name}</h2>
              <h2 className="text-lg m-0 py-2">{user.email}</h2>
              <div className="flex flex-col mx-auto mt-4">
                <h3 className="text-lg text-center font-bold">posts</h3>
                {user.posts && user.posts.map((post,index)=>(
                  <div key={`${index}-${post.id}`} className={"text-center"}>
                     <div className="text-xl font-bold my-2 flex flex-col  gap-1">
                      <span>delete & update</span> <span className="text-orange underline underline-offset-8"> {`${index+1}).${post.title}`}</span>
                     </div>
                     <div className="my-3">
                        <DeleteUpdate post={post}/>
                        </div>
                    <div className="text-center text-lg">{`${index+1}).`}
                    <span>
                      {post.title}
                    </span>
                    </div>
                    <div className="text-center my-2">
                      {post.content}
                    </div>
                    <div className="text-md text-center font-bold">Date</div>
                    <div className="text-center my-2">
                      { post.date && convertDate(post.date)}
                    </div>
                    <div className="text-center my-2">
                      <div className="text-center text-lg font-bold my-2">answer</div>
                      {user.answers && user.answers.map((ans,index)=>(
                        <div key={`${index}-${ans.id}`}>
                        {ans.postId===post.id &&
                        <div className="m-0 p-0">
                            <div className="text-lg my-2 font-bold">comment</div>
                            <div className="text-md">{ans.answer}</div>
                            <div className="text-md text-center">Date</div>
                            <div className="text-center my-2">
                              { ans.date && convertDate(ans.date)}
                            </div>
                          </div>
                          }
                        </div>
                      ))}
                    </div>
                   
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MainAdmin