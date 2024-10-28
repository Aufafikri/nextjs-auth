"use client"

import React, { useEffect } from 'react'

const GoogleCallback = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if(token) {
            localStorage.setItem('token', token)
            window.location.href = '/dashboard'
        } else {
            console.error("token doesnt match")
        }
    }, [])
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center'>
            please wait...
        </div>
    </div>
  )
}

export default GoogleCallback