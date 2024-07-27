import { Toaster } from 'react-hot-toast'
import FormRegister from '@/components/Authentication/Register/FormRegister'

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 max-sm:p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <FormRegister />
      </div>
      <Toaster />
    </div>
  )
}

export default RegisterPage

