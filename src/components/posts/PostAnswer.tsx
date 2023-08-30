import React from 'react';
import type {msgType,answerType,ansResponse,userAccountType,DataType} from "@component/context/type";
import type {Session} from "next-auth";

type postAnsType={
    postId:number,
    userAccount:userAccountType,
    setSaved: React.Dispatch<React.SetStateAction<boolean>>,
    setAllPosts: React.Dispatch<React.SetStateAction<DataType>>,
    allPosts: DataType,
}
const PostAnswer = ({postId,userAccount,setSaved,setAllPosts,allPosts}:postAnsType) => {
    const [answer,setAnswer]=React.useState<string | null>(null);
    const [data,setData]=React.useState<answerType | null>(null);
    const [msg,setMsg]=React.useState<msgType>({loaded:false,msg:""});
    const userId = (userAccount && userAccount.loaded && userAccount.data) ? userAccount.data.id : null;

    React.useMemo(()=>{
        if(userId && postId && answer){
        setData({answer:answer,userId:userId,postId:postId})
        }
    },[userId,postId,answer]);

    const handleSubmit=(e:React.MouseEvent)=>{
        e.preventDefault();
        const submitAns=async()=>{
            const options={
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
            const res = await fetch(`/api/posts/answer`,options);
            if(!res.ok){
                setSaved(false);
                const body:{message:string}= await res.json();
                if(body.message){
                    setMsg({loaded:false,msg:body.message})
                }else{
                    const body:any=await res.json()
                    setMsg({loaded:false,msg:body});
                }
            }
            const body:answerType= await res.json();
            const getPost=allPosts.filter(obj=>obj.id===postId)[0];
            const allPostRm=allPosts.filter(obj=>obj.id!==postId);
            getPost.answers.push(body)
            setAllPosts([...allPostRm,getPost]);
            setMsg({loaded:true,msg:`your ans: ${body.answer} to postId: ${body.postId} was saved saved`});
            setSaved(true);
        }
        if(data){
            submitAns();
        }
    };

  return (
    <div className="z-0  w-full flex flex-col items-center justify-between font-mono  mt-3 mx-0 w-full ">
           
            <form className="m-auto flex flex-col items-center justify-center gap-4 shadow-md shadow-blue-600 rounded-lg w-full ">
                
                <div className="text-lg text-center">answer</div>
                <textarea
                    rows={4}
                    cols={20}
                    id="answer"
                    value={answer ? answer : ""}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="my-3 w-full bg-white text-black-500 shadow-md shadow-blue p-3"
                />
                
                <div className={`flex flex-col items-center justify-center gap-2`}>
                    
                    <button className={`flex flex-col items-center justify-center px-5 p-2 border border-blue-800 rounded-lg`} onClick={(e) => handleSubmit(e)}>
                        respond
                    </button>
                   
                </div>
                
                {msg.loaded ?
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-center text-xs text-blue-800">{msg.msg}</h3>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-center text-sm text-red-600 font-bold">{msg.msg}</h3>
                    </div>
                }
            </form>
            
        </div>
  )
}

export default PostAnswer