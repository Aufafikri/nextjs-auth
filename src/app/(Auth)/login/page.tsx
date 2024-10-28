import FormLogin from '@/components/Authentication/Login/FormLogin'
import GithubButton from '@/components/Authentication/Method/GithubButton'
import GoogleButton from '@/components/Authentication/Method/GoogleButton'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 max-sm:p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <FormLogin />
        <div className='space-y-3'>
        <GoogleButton title="Sign In With Google" />
        <GithubButton title="Sign In With Github" />
        <div className='flex justify-center items-center'>
        <p className='text-sm'>Don't have an account? <Link href="/register" className='text-blue-600 hover:text-blue-500'>sign up</Link> </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage