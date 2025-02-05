import React, { useState, useEffect } from "react";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogDescription, setBlogDescription] = useState("");
  const [BlogImage, setBlogImage] = useState("");
  const [BlogContent, setBlogContent] = useState("");

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    
    if (existingBlogs.length === 0) {
      const defaultBlogs = [
        {
          Id: 1,
          Title: "Adorable Puppies",
          Description: "Puppies bring joy, love, and companionship to our lives. Their playful energy and affectionate nature make them the perfect pets.",
          Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgk9RQKBZMJbKnrh4iMB4ZfKy9pWM2qzKXmQ&s",
          Content: "Puppies are among the most beloved pets in the world, known for their playful behavior and affectionate nature...",
          Read_count: 0,
          Like_count: 0,
        },
        {
          Id: 2,
          Title: "Relaxing Beaches",
          Description: "Beaches are the perfect escape from daily life, offering tranquility, stunning views, and a refreshing atmosphere for relaxation.",
          Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ87HIHJXbYe-aJixwCISLQ1OkGSF8K1FcOw&s",
          Content: "Beaches are one of the most peaceful and refreshing places on Earth. The sound of the waves...",
          Read_count: 0,
          Like_count: 0,
        },
        {
          Id: 3,
          Title: "The Beauty of Nature",
          Description: "Nature's beauty is endless, from lush forests to towering mountains, offering tranquility, adventure, and breathtaking landscapes.",
          Image: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=",
          Content: "Nature is a gift that surrounds us with beauty and wonder. From towering mountains and deep oceans...",
          Read_count: 0,
          Like_count: 0,
        },
      ];
      localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    } else {
      setBlogs(existingBlogs);
    }
  }, []);
  

  const addBlogHandle = () => {
    let updatedBlogs = [...blogs];
    let newBlog = {
      Id: Date.now(),
      Title: BlogTitle,
      Description: BlogDescription,
      Image: BlogImage,
      Content: BlogContent,
      Read_count: 0,
      Like_count: 0,
    };
    updatedBlogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    window.location.href = "/";
  };

  const discardHandle = () => {
    window.location.href = "/";
  };

  return (
    <div className="m-[5%] p-[2%] bg-amber-50 justify-center items-center border-2">
      <label className="block font-bold text-xl mb-2">Blog Title</label>
      <input type="text" placeholder="Enter Blog Title" required onChange={(e) => setBlogTitle(e.target.value)} className="w-full border border-gray-400 p-2 rounded mb-4" />

      <label className="block font-bold text-xl mb-2">Blog Description</label>
      <input placeholder="Enter Blog Description" onChange={(e) => setBlogDescription(e.target.value)} className="w-full border border-gray-400 p-2 rounded mb-4" />

      <label className="block font-bold text-xl mb-2">Blog Image</label>
      <input type="text" placeholder="Enter image URL" required onChange={(e) => setBlogImage(e.target.value)} className="w-full border border-gray-400 p-2 rounded mb-4" />

      <label className="block font-bold text-xl mb-2">Blog Content</label>
      <textarea rows="8" placeholder="Enter blog content" required onChange={(e) => setBlogContent(e.target.value)} className="w-full border border-gray-400 p-2 rounded mb-4" />

      <div className="flex justify-center items-center gap-10">
        <button type="button" onClick={()=>{discardHandle()}} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Discard
        </button>
        <button type="button" onClick={()=>{addBlogHandle()}} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
