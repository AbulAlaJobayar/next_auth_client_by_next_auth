"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (data:UserData) => {
  const res = await fetch('https://nextjs-authentication-starter-pack-nu.vercel.app/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = res.json();
  return userInfo
};
