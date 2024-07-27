"use client"

import { useCreateLoginUser } from '@/features'
import React from 'react'
import { z } from 'zod'
import { loginSchema } from '../../../../schema/useAuthSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const FormLogin = () => {
    const { mutate } = useCreateLoginUser()

  type LoginFormData = z.infer<typeof loginSchema>

  const form  = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const { control, handleSubmit } = form

  const onSubmit = handleSubmit((values) => {
    mutate(values)
  })
  return (
    <>
    <Form {...form}>
        <form className="space-y-6" onSubmit={onSubmit}>
         <FormField
          name='email'
          control={control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )
          }} 
          />
          <FormField
          name='password'
          control={control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )
          }}
          />
          <div className='cursor-pointer'>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </form>
        </Form>
    </>
  )
}

export default FormLogin