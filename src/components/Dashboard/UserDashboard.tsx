"use client"

import { useFetchProfile } from '@/features'
import React from 'react'

const UserDashboard = () => {
    const {data: user} = useFetchProfile()
  return (
    <div className='h-screen flex justify-center items-center'>
    <div>
    <h1 className='font-bold text-2xl'>Welcome To Dashboard 🤗</h1>
    <div>
    <p>username: {user?.username} </p>
    <p>email: {user?.email} </p>
    </div>
    </div>
  </div>
  )
}

export default UserDashboard