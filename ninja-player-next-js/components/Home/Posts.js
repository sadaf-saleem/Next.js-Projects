import React, { useState } from "react";
import PostItem from "./PostItem";
import PostModal from "./PostModal";

function Posts({ posts }) {
  const [post, setPost] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <PostModal post={post} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10">
        {posts.map((item, index) => (
          <div key={index} onClick={() => { setPost(item); setIsOpen(true) }}>
            <PostItem post={item} modal={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;