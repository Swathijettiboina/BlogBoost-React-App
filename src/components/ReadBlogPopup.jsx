import React, { useState } from "react";

export const ReadBlogPopup = ({ blog }) => {
  if (!blog) return null;
 const handleClose=()=>{
  window.location.href='/'
 }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 mb-1  mt-1 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg max-w-3xl mb-1  mt-1 max-w-full m-10 max-h-[80vh] overflow-auto shadow-lg">
        <h2 className="text-xl font-bold mb-1 break-words">{blog.Title}</h2>
        <img src={blog.Image} alt="blog" className="w-full rounded-lg mb-3" />
        <p className="text-gray-700 mb-2 bg-blue-200 break-words">{blog.Description}</p>
        <p className="text-gray-600 break-words">{blog.Content}</p>
        <button onClick={handleClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >Close
        </button>
      </div>
    </div>
  );
};

export default ReadBlogPopup;
