
import React from 'react';
import UsersPosts from "@component/posts/UserPosts";


const Dashboard = async () => {

    return(
     
        <div className="flex flex-col py-10 px-1 lg:mx-auto lg:container ">
            <h3 className="text-center text-xl m-auto">Protected</h3>
            <div className="flex flex-col my-3 mx-auto items-center">
              <a href="/posts" className="m-auto">
                <button className="px-3 py-1 shadow shadow-blue-600 rounded-md">
                  return
                </button>
                </a>
            </div>
           <UsersPosts/>
        </div>
        
    )
  }


export default Dashboard