import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
 

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <>
    <div className="p-15  flex flex-col gap-5 justify-center">
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <BlogCard key={index} setBlogs={setBlogs} blogs={blogs}  Id={blog.Id} Content={blog.Content} Title={blog.Title} Description={blog.Description} Image={blog.Image} Read_count={blog.Read_count}  />
        ))
      ) : 
      (<p>No blogs available. Add some blogs!</p>)}
    </div>
     </>
  );
};

export default Blogs;
