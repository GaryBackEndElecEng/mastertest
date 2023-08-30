import {type NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import  Providers from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { URLSearchParams } from "url";
import { Prisma,PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import type {userAccountType} from "@component/context/type";
const logo=`${process.env.NEXT_PUBLIC_aws}/logo.png`


const prisma= new PrismaClient();
const getUrl=process.env.NEXT_PUBLIC_url

export async function hashKey(pswd:string){
    let salt=bcrypt.genSaltSync(8);
    return bcrypt.hashSync(pswd,salt)
  }
  export async function hashComp(pswd:string,hash:string){
    var comp=bcrypt.compare(pswd,hash);
    return comp
  }
let count=0;

 const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials, }) {
        const isAllowed=true;
        //activate only after the signin is successful
        if(account && account.provider ==="google"){
            try {
              if(profile && profile.email && account){
                let hashPswd= await hashKey(account.providerAccountId)
                 const user =await prisma.user.upsert({
                  where:{email:profile.email},
                  update:{image:profile.image},
                  create:{
                      email:profile.email,
                      name:profile.name,
                      password:hashPswd,
                      image:profile.image
                  }
                });
               if(user && user.name){
                  return true
              }
                
                prisma.$disconnect()
              }
              
            } catch (error) {
              
            }
        }else if(credentials){
          return true
        }
        return false
      
    },
    async redirect({ url, baseUrl }) {
       
        // Allows relative callback URLs in the middleware(match)
       
        if (url.startsWith("/"))
        { 
          
          return `${url}`
        }
        // Allows callback URLs on the same origin
        if (new URL(url).origin === baseUrl)
        {
          
           return url
        }
        
        return baseUrl
            
        
    },
    async session({ session, user, token }) {
        // console.log("session",session,token,user) //works
      return {
        ...session,
        user:{
           ...session.user, 
           id:token.id,
            randomKey:token.randomKey
        }
        
      }
    },
    async jwt({ token, user }) {
        // console.log("token from authOptions",token,user)// works jwt executes first before session
        if(user){
            const u= user as unknown as any;
            return{
                ...token,
                id:u.id,
                randomKey:u.randomKey
            }
        }
      return token
    }
    
  },
session:{
strategy:"jwt"
},
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_client_ID as string,
      clientSecret: process.env.GOOGLE_client_secret as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    
    }),
    CredentialsProvider({
        
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'log in',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "email", type: "text", placeholder: "email@mail.com" },
          password: { label: "Password", type: "password" }
        },
        
        async authorize(credentials,req) {
            let cred=credentials
          if(!cred?.email || !cred?.password){
            return null
          }
          const user = await prisma.user.findUnique({
            where:{
                email:cred.email
            }
          });
        //   console.log(user)// worked
          if(!user){
            prisma.$disconnect();
            return null
          }
          const check=await hashComp(cred?.password,user?.password) ? true:false;
          if(!check){
            prisma.$disconnect();
            return null
          }
          return{id:user.id + "",email:user.email, name:user.name,randomKey:"This is cool"}

        }
      }),
    // ...add more providers here
  ],
  
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '#33FF5D', // Hex color code #33FF5D
    logo: logo, // Absolute URL to image
  },
 
  debug:process.env.NODE_ENV==="development"

}
export default authOptions;