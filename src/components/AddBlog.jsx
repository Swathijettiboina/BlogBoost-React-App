import React, { useState } from 'react'

const AddBlog = () => {
  const [BlogTitle,setBlogTitle]=useState("");
  const [BlogDescription,setBlogDescription]=useState("");
  const [BlogImage,setBlogImage]=useState("");
  const [BlogContent,setBlogContent]=useState("");

    const addBlogHandle=()=>{
    // console.log("loading")
    var count=parseInt(localStorage.getItem("blog_count"))||0;
    count += 1;
    localStorage.setItem("blog_count", count);
    let blog = {
      "Id": Date.now(),
      "Title": BlogTitle,
      "Description": BlogDescription,
      "Image":BlogImage,
      "Content":BlogContent,
      "Read_count":parseInt(0),
      }; 
      var blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs.push(blog);
      localStorage.setItem("blogs", JSON.stringify(blogs));
      window.location.href='/';
  }
  const discardHandle=()=>{
    window.location.href='/';
  }
  return (
    // <div className='flex justify-center items-center'>
    <div className='m-[5%] p-[2%] bg-amber-50 justify-center items-center border-2'>
      <label for="blog_title" className="block justify-center font-bold text-xl mb-2">Blog Title</label>
        <input type="text"  placeholder="Enter Blog Title" required 
         onChange={(e)=>{setBlogTitle(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4"/>

        <label for="blog_description" className="block font-bold text-xl mb-2">Blog Description</label>
        <input  placeholder="Enter Blog Description"  
        onChange={(e)=>{setBlogDescription(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4 placeholder-gray-500"/>

        <label for="blog_image" className="block font-bold text-xl mb-2">Blog Image</label>
        <input type="text" placeholder="Enter image url for blog" required 
        onChange={(e)=>{setBlogImage(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4"/>

        <label for="blog_content" className="block font-bold text-xl mb-2">Blog Content</label>
        <textarea type="text"  rows="8" cols="6" placeholder="Enter blog content" required 
        onChange={(e)=>{setBlogContent(e.target.value)}} className="w-full border border-gray-400 p-2 rounded mb-4"/>

        <div className='flex justify-center items-center gap-10'>
        <button type="button"  onClick={discardHandle} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Discard
        </button>
        <button type="button"  onClick={addBlogHandle} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Add Blog
        </button>
        </div>     
        {/* </div> */}
    </div>
  )
}

export default AddBlog