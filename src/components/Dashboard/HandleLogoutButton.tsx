"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const HandleLogoutButton = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')

    router.push('/')
  }
  return (
    <div>
      <button onClick={handleLogout} className='text-white font-semibold'>Logout</button>
    </div>
  )
}

export default HandleLogoutButton