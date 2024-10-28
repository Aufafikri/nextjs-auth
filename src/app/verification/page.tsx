"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EmailVerificationSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Email verified successfully!</h1>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
