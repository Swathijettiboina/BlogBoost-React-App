import React, { useState,useEffect } from 'react'
import {Eye} from "lucide-react"
import ReadBlogPopup from "./ReadBlogPopup";
import EditPopup from './EditPopup';

const BlogCard = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const [seletedEditBlog,setSeletedEditBlog]=useState(null);
    const [showEditablePopup,setShowEditablePopup]=useState(false);

    const deleteBlog = (id) => {
        // console.log(id);
        const updatedBlogs =  props.blogs.filter((blog) => blog.Id !== id);
        props.setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        localStorage.setItem("blog_count",parseInt(localStorage.getItem("blog_count")-1));
      };

       const readBlogHandle = (id) => {
          const readingBlog=props.blogs.find((blog) => blog.Id === id);
        //   const updatedBlogs =props.blogs.map((blog) =>
        //     blog.Id === id ? { ...blog, Read_count: (blog.Read_count || 0) + 1 }: blog);
        //   props.setBlogs(updatedBlogs);
        //   localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      
          setSelectedBlog(readingBlog);
          setShowPopup(true);
        };

       const editBlog=(id)=>{
        const editableBlog=props.blogs.find((blog) => blog.Id === id);
        setSeletedEditBlog(editableBlog);
        setShowEditablePopup(true);
       }; 
  return (
    <>
        <div key={props.Id} className="text-center break-words text-wrap rounded overflow-hidden shadow-lg bg-white m-1 p-5 hover:shadow-lg hover:bg-blue-300">
          
          <h2 className="text-xl rounded-lg w-auto bold shadow-lg text-black bg-blue-100"> {props.Title} </h2>
          <img src={props.Image} alt="blog image" />
          <p className="text-black bg-blue-50 p-2">{props.Description}</p>

          <div className="flex justify-between items-center gap-2 rounded-[20px] px-1 py-1">
            <div className=""><Eye /><span>{localStorage.getItem(`Read_count${props.Id}`) || 0}</span></div>

            <button type="button"onClick={() => readBlogHandle(props.Id)} className="bg-gray-200 rounded-lg px-3 py-2 hover:underline">
              Read              
              {showPopup && selectedBlog?.Id === props.Id && ( <ReadBlogPopup blog={selectedBlog} />)}
            </button>

            <button type="button" onClick={() => editBlog(props.Id)} className="bg-red-200 rounded-lg px-3 py-2 hover:underline">
              Edit {showEditablePopup && seletedEditBlog?.Id === props.Id && ( <EditPopup blog={seletedEditBlog} />)}  
              </button>

            <button type="button" onClick={() => deleteBlog(props.Id)} className="bg-red-200 rounded-lg px-3 py-2 hover:underline">
              Delete</button>
          </div>
        </div>
    </>   
  )
}

export default BlogCard
