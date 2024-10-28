"use client";

import { useCreateRegisterUser } from "@/features";
import React, { useState } from "react";
import { registerSchema } from "../../../../schema/useAuthSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormRegister = () => {
  const { mutate } = useCreateRegisterUser();

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showMessageVerification, setShowMessageVerification] = useState(false);

  type RegisterFormData = z.infer<typeof registerSchema>;

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((values) => {
    mutate(values, {
      onSuccess: () => {
        if (!isEmailVerified) {
          setShowMessageVerification(true);
        } else {
          console.log("registration success!");
        }
      },
    });
  });

  const googleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  return (
    <>
      <Form {...form}>
        <form className="space-y-6" onSubmit={onSubmit}>
          <FormField
            name="username"
            control={control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="email"
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
              );
            }}
          />
          <FormField
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="cursor-pointer">
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              Sign Up
            </button>
        {showMessageVerification && (
        <p className="text-gray-500 mt-1 -mb-2 text-center dark:text-gray-200 text-sm">
          Please verify your email first.
        </p>
      )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default FormRegister;
