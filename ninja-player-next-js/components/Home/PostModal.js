import React from 'react'
import PostItem from './PostItem'
import { HiOutlineXCircle } from 'react-icons/hi'

function PostModal({ post, isOpen, onClose }) {
  if (!isOpen || !post) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      
      {/* Modal box */}
      <div className="relative z-10 bg-white rounded-lg p-4 w-[90%] max-w-md">
        <button className='absolute right-2 top-2' onClick={onClose}>
          <HiOutlineXCircle className='text-[22px] text-gray-700' />
        </button>
        <PostItem post={post} />
      </div>
    </div>
  )
}

export default PostModal