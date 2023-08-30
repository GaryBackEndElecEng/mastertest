"use client";
import React from 'react';
import type { DataType, ImgDataType, PostDataType, userAccountType, addCommentType, userType } from "@component/context/type";
import Image from "next/image";
import type { imageCategory } from "@component/context/Types";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { IconButton } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import SourceIcon from '@mui/icons-material/Source';
import { useRouter } from "next/navigation";
import { GeneralContext } from "@component/context/GeneralContextProvider";
import { GeneralContextNoAcc } from "@component/context/GeneralContext";
import PostAnswer from "./PostAnswer";
import { convertDate } from "@component/ultilities";
const logo = `${process.env.NEXT_PUBLIC_aws}/logo.png`;


type mainDisplayType = {
    setAllPosts: React.Dispatch<React.SetStateAction<DataType>>,
    allPosts: DataType,
    userId: number | null,
    setMsg: React.Dispatch<React.SetStateAction<{
        loaded: boolean;
        msg: string | null;
    }>>,
    msg: {
        loaded: boolean;
        msg: string | null;
    },
    isSignin: boolean,
    setPostData: React.Dispatch<React.SetStateAction<PostDataType | null>>,
    postData: PostDataType | null,
    account: userAccountType,
    chela: string,
    allUsers: userType[]
}
const AllSubPosts = ({ allPosts, setAllPosts, userId, setMsg, msg, isSignin, setPostData, postData, account, chela, allUsers }: mainDisplayType) => {
    const { session, status } = React.useContext(GeneralContext);
    const { extraImages } = React.useContext(GeneralContextNoAcc);
    const router = useRouter();
    const [title, setTitle] = React.useState<string | undefined>("");
    const [content, setContent] = React.useState<string | undefined>("");
    const [publish, setPublish] = React.useState<boolean>(false);
    const [toUpdate, setToUpdate] = React.useState<boolean>(false);
    const [addComment, setAddComment] = React.useState<addCommentType>({ loaded: false, postId: null });
    const [saved, setSaved] = React.useState<boolean>(false);
    const [allPostImgs, setAllPostImgs] = React.useState<ImgDataType>([])

    React.useEffect(() => {
        if (saved) {
            setAddComment({ loaded: false, postId: null })
        }
    }, [saved]);

    const getName = React.useCallback((userId: number) => {
        if (allUsers && allUsers.length > 0) {
            const getname: string | undefined = allUsers.filter(user => (user.id === userId))[0].name?.split(" ")[0]
            if (getname) return getname
        }
    }, [allUsers]);

    React.useEffect(() => {
        if (allPosts && extraImages) {
            let len = extraImages.length * 1.3
            let arr: ImgDataType = []
            allPosts.forEach((post, index) => {
                let rand = Math.floor(Math.random() * len);
                let img: imageCategory | undefined = extraImages?.filter(obj => (obj.id > rand))[0];
                if (img) {
                    arr.push({ ...post, img: img.image })
                } else {
                    arr.push({ ...post, img: logo })
                }
            });
            setAllPostImgs(arr);
        }

    }, [allPosts, extraImages]);

    const routeToDashboard = (e: React.MouseEvent, userid: number) => {
        e.preventDefault();
        if (userId === userid) {
            router.push("/dashboard");
        }
    }
    const handleAddComment = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        setSaved(false);
        if (!(addComment.loaded && addComment.postId == id)) {
            setAddComment({ loaded: true, postId: id });

        } else {
            setAddComment({ loaded: false, postId: null })
        }
    }



    return (
        <div className={`${chela} z-0 max-w-5xl w-full flex flex-col items-center justify-between  text-sm mt-10 dark:bg-black dark:text-white text-site_blue_dark bg-white`}>
            <div className="text-center text-5xl my-3 text-amber-600">Posts</div>
            <div className="text-center text-2xl my-3 text-amber-600">login to add a comment</div>

            <div className="m-auto p-2 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {allPostImgs && allPostImgs.sort((a, b) => b.id - a.id).map((obj, index) => (
                    <div className={`mx-auto p-3 col-span-1 shadow-md shadow-blue-600 dark:shadow-white rounded-md`} key={`${obj.id}-${index}-`} >
                        <Image src={obj.img} alt="www.masterconnect.ca" width={65} height={65} className="rounded-[50%] shadow-md shadow-blue p-2 aspect-[1/1]" blurDataURL={obj.img} />
                        <div className={`flex flex-row flex-wrap mx-auto items-center  ${userId && obj.userId === userId ? " cursor-pointer" : ""}`} onClick={(e) => routeToDashboard(e, obj.userId)}>
                            <div className={`${userId === obj.userId ? "text-blue-500 text-underline" : " text-black"} mx-auto p-3 text-2xl shadow-md rounded-md shadow-blue-500`} >{obj.title}</div>
                            {
                                obj.userId === userId &&
                                <IconButton  >
                                    <ManageAccountsIcon sx={{ m: 3, background: "bleu", color: "red", fontSize: "120%" }} />
                                </IconButton>
                            }
                        </div>

                        <div className="lg:mx-auto py-3 mx-0" >published:{obj.published ? "true" : "false"}</div>
                        <div className="mx-auto p-3 text-xl inline-flex" >
                            <SourceIcon sx={{ color: "red", ml: 2, mr: 2 }} />
                            content:
                        </div>
                        <div className="mx-0 p-1 text-xl" >{obj.content}</div>
                        <div className="flex flex-col my-2 items-center justify-center">
                            <h3 className="text-md underline underline-offset-4 text-orange">{getName(obj.userId)}
                            </h3>
                        </div>
                        <div className="text-sm text-center">Date</div>
                        <div className="text-center my-2 text-md">
                            {obj.date && convertDate(obj.date)}
                        </div>
                        <div className="mx-0 p-1 text-lg" >
                            {(obj.answers && obj.answers.length) &&
                                obj.answers.map((ans, index) => (

                                    <div className="flex flex-col items-center w-full" key={`${index}-${ans?.id}`}>
                                        <CommentIcon sx={{ color: "blue" }} />
                                        <div>{ans.answer}</div>
                                        <h3 className="text-md underline underline-offset-4 text-orange ">
                                            {getName(ans.userId)}
                                        </h3>
                                        <div className="text-sm text-center">Date</div>
                                        <div className="text-center my-2 text-md">
                                            {ans.date && convertDate(ans.date)}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {(addComment.loaded && addComment.postId === obj.id && !saved) &&
                            <PostAnswer
                                userAccount={account}
                                postId={obj.id}
                                setAllPosts={setAllPosts}
                                allPosts={allPosts}
                                setSaved={setSaved}
                            />}
                        <div className="flex flex-col items-center justify-center">
                            {userId && <button className="px-3 py-1 text-md rounded-md shadow shadow-blue" onClick={(e) => handleAddComment(e, obj.id)}>
                                {(addComment.postId !== obj.id) ? <span className="text-site_mint"> add a thought</span>
                                    :
                                    <span className="text-orange"> close</span>
                                }
                            </button>}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default AllSubPosts