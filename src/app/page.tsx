import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Welcome To Authentication</h1>
        <div className='flex justify-center gap-8'>
        <Link href={`/register`} className='bg-primary text-white p-2 rounded-lg'>Sign Up</Link>
        <Link href={`/login`} className='bg-primary text-white p-2 rounded-lg'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Home