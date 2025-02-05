import React, { useEffect, useState } from 'react'

const EditPopup = ({ blog }) => {
    if (!blog) return null;
    const [BlogTitle,setBlogTitle]=useState(blog.Title);
    const [BlogDescription,setBlogDescription]=useState(blog.Description);
    const [BlogImage,setBlogImage]=useState(blog.Image);
    const [BlogContent,setBlogContent]=useState(blog.Content);

    useEffect(()=>{
        setBlogTitle(blog.Title);
        setBlogDescription(blog.Description);
        setBlogImage(blog.Image);
        setBlogContent(blog.Content);
    },[blog])

      const updateBlogHandle=(id)=>{
        var blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        let myblog=blogs.find(b=>b.Id===parseInt(id));
        if(myblog){
            myblog.Title = BlogTitle;
            myblog.Description = BlogDescription;
            myblog.Image=BlogImage;
            myblog.Content=BlogContent;
        }
        
        localStorage.setItem("blogs", JSON.stringify(blogs));
        window.location.href='/';
      };

    const discardHandle=()=>{
        window.location.href='/';
      }

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
        <div className='p-5 border-2 rounded-3xl w-3xl bg-amber-50 justify-center items-center'>
        <label for="blog_title" className="block justify-center font-bold text-xl mb-2">Blog Title</label>
        <input type="text"  placeholder="Enter Blog Title" required value={BlogTitle}
         onChange={(e)=>{setBlogTitle(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4"/>

        <label for="blog_description" className="block font-bold text-xl mb-2">Blog Description</label>
        <input  placeholder="Enter Blog Description"  value={BlogDescription}
        onChange={(e)=>{setBlogDescription(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4 placeholder-gray-500"/>

        <label for="blog_image" className="block font-bold text-xl mb-2">Blog Image</label>
        <input type="text" placeholder="Enter image url for blog" required value={BlogImage}
        onChange={(e)=>{setBlogImage(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4"/>

        <label for="blog_content" className="block font-bold text-xl mb-2">Blog Content</label>
        <textarea type="text"  rows="8" cols="6" placeholder="Enter blog content" required value={BlogContent}
        onChange={(e)=>{setBlogContent(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4"/>

        <div className='flex justify-center items-center gap-10'>
        <button type="button"  onClick={() =>discardHandle()} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Discard
        </button>
        <button type="button"  onClick={() =>updateBlogHandle(blog.Id)} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Update Blog
        </button>
        </div>    
    </div>
    </div>
  )
}

export default EditPopup
