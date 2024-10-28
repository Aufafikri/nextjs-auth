import { Toaster } from 'react-hot-toast'
import FormRegister from '@/components/Authentication/Register/FormRegister'
import GoogleButton from '@/components/Authentication/Method/GoogleButton'
import GithubButton from '@/components/Authentication/Method/GithubButton'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 max-sm:p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <FormRegister />
        <div className='space-y-3'>
        <GoogleButton title="Sign Up With Google" />
        <GithubButton title='Sign Up With Github' />
        <div className='flex justify-center items-center'>
        <p className='text-sm'>Already have an account? <Link href="/login" className='text-blue-600 hover:text-blue-500'>sign in</Link> </p>
        </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default RegisterPage

