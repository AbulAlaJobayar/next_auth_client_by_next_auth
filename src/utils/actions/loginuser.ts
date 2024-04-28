"use server"

import { FormValues } from "@/app/login/page"
import { config } from "process"

export const loginUser=async(data:FormValues)=>{
const res=await fetch(`https://nextjs-authentication-starter-pack-nu.vercel.app/login`,{
        method:"POST",
        headers:{
                "Content-Type":"Application/json"
        },
        body:JSON.stringify(data),
        cache:"no-store"
})
const loginInfo=res.json()
return loginInfo
}