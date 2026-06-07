import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Form from '../../components/CreatePost/Form';

function CreatePost() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status]);

  if (status === 'loading') {
    return (
      <div className='flex justify-center mt-20'>
        <p className='text-gray-500'>Loading...</p>
      </div>
    )
  }

  return (
    <div className='flex justify-center'>
      <div className='p-6 mt-8 lg:w-[35%] md:w-[50%]'>
        <h2 className='text-[30px] font-extrabold text-blue-500'>CREATE POST</h2>
        <p>Create Post and Discover/Invite new Friends and Player</p>
        <Form />
      </div>
    </div>
  )
}

export default CreatePost