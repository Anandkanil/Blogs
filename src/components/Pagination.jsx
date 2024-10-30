import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export default function Pagination() {
  const { 
    page,
    setPage,
    totalPages,
    fetchBlogPosts}=useContext(AppContext);
    let currentPage=page;
  return (
    <footer className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300'>
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        <button onClick={()=>{currentPage=currentPage-1; setPage(currentPage); fetchBlogPosts(currentPage)}} className={`border-2 border-gray-300 py-1 px-4 rounded-md ${page==1?'hidden':'block'}`}>Previous</button>
        <button onClick={()=>{currentPage=currentPage+1; setPage(currentPage); fetchBlogPosts(currentPage)}} className={`border-2 border-gray-300 py-1 px-4 rounded-md ${page==totalPages?'hidden':'block'}`}>Next</button>
        <p className='text-sm font-semibold ml-auto'>Page {currentPage} of {totalPages}</p>
      </div>
    </footer>
  )
}
