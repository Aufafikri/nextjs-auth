"use client"

import { useFetchProfile } from '@/features'
import React from 'react'
import HandleLogoutButton from './HandleLogoutButton'

const UserDashboard = () => {
    const { data: user } = useFetchProfile()
  return (
    <>
    <div className="bg-teal-700 p-4 flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">Welcome, {user?.profile.username}</h1>
      <HandleLogoutButton />
    </div>
    <div className='p-4'>
      <p className='text-gray-400'>Your Email: {user?.profile.email} </p>
      <p className='text-gray-400'>Login Method: {user?.profile.loginMethod} </p>
    </div>
    </>
  )
}

export default UserDashboard