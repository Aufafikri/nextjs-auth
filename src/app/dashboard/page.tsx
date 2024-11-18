"use client"

import UserDashboard from '@/components/Dashboard/UserDashboard'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const DashboardPage = () => {
  // const router = useRouter()
  // const alertShown = useRef(false)

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if(!token && !alertShown.current) {
  //     alert('oops you must login first!')
  //     alertShown.current = true
  //     router.push('/')
  //   }
  // }, [router])

  return (
    <div>
      <UserDashboard />
    </div>
  )
}

export default DashboardPage