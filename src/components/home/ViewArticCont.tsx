"use client";
import React, { MouseEvent} from 'react';
import { useRouter } from "next/navigation";

const ViewArticCont = () => {
    const route = useRouter();
    const handleArticles = (e: MouseEvent) => {
        route.push("/articles")
    }
    const handleContact = (e: MouseEvent) => {
        route.push("/contact")
    }
    return (
        <div className="lg:container lg:mx-auto my-1 dark:bg-black dark:text-white text-black bg-[rgba(255,255,255,0.6)] mb-4 pb-5 pt-5" >
            <div className="flex flex-row flex-wrap gap-1">
                <div className="m-auto flex flex-col justify-center items-center shadow-lg rounded-lg p-1 px-3 shadow-blue dark:text-white text-black border border-blue font-bold"
                    onClick={(e) => handleArticles(e)}
                >
                    <h3 className="text-2xl p-2">View</h3>
                    <h3 className="text-2xl p-2">Articles</h3>

                </div>
                <div className="m-auto flex flex-col justify-center items-center shadow-lg rounded-lg p-1 px-3 shadow-blue dark:text-white text-black border border-blue font-bold"
                    onClick={(e) => handleContact(e)}
                >
                    <h3 className="text-2xl p-2">get to</h3>
                    <h3 className="text-2xl p-2">Know us</h3>

                </div>
            </div>
        </div>
    )
}

export default ViewArticCont