"use client"

import React from 'react'
import { BsGithub } from "react-icons/bs";

interface titleType {
    title: string
}

const GithubButton = ({ title }: titleType) => {
    const GithubAuth = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_GITHUB_ENDPOINT_URL}`
    }
  return (
    <div>
        <button onClick={GithubAuth} className='p-2 border flex justify-center w-full gap-2 hover:bg-slate-50'><BsGithub size={24} />{title}</button>
    </div>
  )
}

export default GithubButton