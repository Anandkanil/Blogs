import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Blogs() {
  const { loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts}=useContext(AppContext);
  return (
    <section className='w-full min-h-[90vh] my-[100px]'>
    <div className='flex flex-col gap-y-10 my-4' >
    {
        posts?.map((post)=>(
          <div key={post.id} className='w-11/12 max-w-2xl mx-auto'>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-sm my-1'>By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span></p>
            <p className='mt-4 mb-2'>Posted On {post.date}</p>
            <p>{post.content}</p>
            <div className='flex flex-wrap gap-x-2 items-center'>
            {post.tags.map((tag,index)=>(
              <span key={index} className='text-xs font-semibold underline text-blue-700 cursor-pointer'>#{tag}</span>
            ))
            }
            </div>
          </div>
        )) 
    }

    </div>

    </section>
  )
}
