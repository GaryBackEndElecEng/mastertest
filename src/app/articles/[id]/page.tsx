"use client";
import  {useParams} from 'next/navigation';
import MainArticle from "../../../components/articles/MainArticle";

const PageArticle = () => {
    const router=useParams();
    const {id}=router;

  return (
    <MainArticle id={id}/>
    
  )
}

export default PageArticle