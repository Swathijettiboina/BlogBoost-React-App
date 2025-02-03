import React, { useState, useEffect } from "react";
import {Eye} from "lucide-react"
import ReadBlogPopup from "./ReadBlogPopup";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const readBlogHandle = (id) => {
    const readingBlog=blogs.find((blog) => blog.Id === id);
    const updatedBlogs = blogs.map((blog) =>
      blog.Id === id
        ? { ...blog, Read_count: (blog.Read_count || 0) + 1 }
        : blog
    );
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    setSelectedBlog(readingBlog);
    setShowPopup(true);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.Id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    localStorage.setItem("blog_count",parseInt(localStorage.getItem("blog_count")-1));
  };

  return (
    <>
    {blogs.map((blog) => (
    
    <div className = "text-center rounded overflow-hidden shadow-lg bg-white m-1 p-5 hover:shadow-lg hover:bg-blue-300">
     
        <div key={blog.Id} className="text-center rounded overflow-hidden shadow-lg bg-white m-1 p-5 hover:shadow-lg hover:bg-blue-300">
          
          <h2 className="text-xl rounded-lg w-auto bold shadow-lg text-black bg-blue-100"> {blog.Title} </h2>
          <img src={blog.Image} alt="blog image" />
          <p className="text-black bg-blue-50 p-2">{blog.Description}</p>

          <div className="flex justify-between items-center gap-2 rounded-[20px] px-1 py-1">
            <div className=""><Eye /><span>{localStorage.getItem(`Read_count${blog.Id}`) || 0}</span></div>

            <button type="button"onClick={() => readBlogHandle(blog.Id)} className="bg-gray-200 rounded-lg px-3 py-2 hover:underline">
              Read              
              {showPopup && selectedBlog?.Id === blog.Id && ( <ReadBlogPopup blog={selectedBlog} />)}
            </button>
            <button type="button" onClick={() => editBlog(blog.Id)} className="bg-red-200 rounded-lg px-3 py-2 hover:underline">
              Edit</button>
            <button type="button" onClick={() => deleteBlog(blog.Id)} className="bg-red-200 rounded-lg px-3 py-2 hover:underline">
              Delete</button>
          </div>
        </div>
      </div>
      ))}
     </>
  );
};

export default Blog;
