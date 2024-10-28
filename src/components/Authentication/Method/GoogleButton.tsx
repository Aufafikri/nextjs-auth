"use client"

import React from 'react'
import { FcGoogle } from "react-icons/fc";

interface titleType {
    title: string,
}

const GoogleButton = ({ title }: titleType) => {
    const GoogleAuth = () => {
      window.location.href = `${process.env.NEXT_PUBLIC_API_GOOGLE_ENDPOINT_URL}`;
    }
  return (
    <div>
        <button onClick={GoogleAuth} className='p-2 border w-full flex justify-center gap-2 hover:bg-slate-50'><FcGoogle size={24} />{title}</button>
    </div>
  )
}

export default GoogleButton