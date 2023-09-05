import type {Session} from "next-auth"
export type userType={
    id:number,
    name?:string,
    email:string,
    password:string,
    image?:string,
    posts:PostDataType[],
    answers:answerType[]
}
export type userInfoType={
    id:number,
    name:string,
    email:string,
    image?:string,
    password?:string
}
export type showType={
  loaded:boolean,
  id:number | null
}
export type imgUserType={
    id:number,
    name?:string,
    email:string,
    password:string,
    posts:imgPostDataType[],
    answers:answerType[]
}
export type registerType={
    id?:number,
    name?:string,
    email:string,
    password:string,
}
export type testPosts={
  posts:PostDataType[],
  answers:answerType[]
}
export type DataType ={
    id: number,
    title: string ,
    content: string ,
    answers:answerType[],
    published: boolean,
    date?:Date,
    userId: number
  }[]
export type PostDataType ={
    id: number,
    title: string ,
    content: string,
    date?: Date,
    answers:answerType[],
    published: boolean,
    userId: number
    
  }
export type imgPostDataType ={
    id: number,
    title: string ,
    content: string,
    img:string,
    date?: Date,
    answers:answerType[],
    published?: boolean,
    userId: number
    
  }
export type loginType={
    email:string,
    password:string
}
export type adminType={
    email:string,
    name?:string
}
export type adminDeleteUserType={
    userId:number,
    email:string,
    name:string
}
export type loginTypedata={
    data:{email:string,
    password:string
    }
}
export type userTypeData={
    data:{
    name:string,
    email:string,
    password:string
    }
}
export type msgType={
    loaded:boolean,
    msg:string | null
}
export type userAccountType={
    loaded:boolean,
    data:{
      id:number,
    name:string | undefined,
    email:string | undefined,
    image:string | undefined,
    status: "loading" | "authenticated" | "unauthenticated"
    } | null
  }
  export type answerType={
    id:number,
    answer:string,
    userId:number,
    postId:number,
    date?: Date
  }
  export type answerType_2={
    answer:string,
    userId:number,
    postId:number,
  }
  export type ansResponse={
    title:string,
    answer:string,
  }
  export type addCommentType={
    loaded:boolean,
    postId:number | null
  }
  export type ImgDataType ={
    id: number,
    title: string ,
    content: string ,
    answers:answerType[],
    published?: boolean,
    date?:Date,
    userId: number,
    img:string

  }[]

  export type deleteType={
    loaded:boolean,
    postId:number,
    userId:number,
    deleteThis:boolean,
    published:boolean,
    adminuser?:string,
    adminemail?:string
  }