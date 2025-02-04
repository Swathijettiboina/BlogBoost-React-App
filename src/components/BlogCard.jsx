import React, { useState,useEffect } from 'react'
import {Eye,Heart, Pencil, Trash2} from "lucide-react"
import ReadBlogPopup from "./ReadBlogPopup";
import EditPopup from './EditPopup';


const BlogCard = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const [seletedEditBlog,setSeletedEditBlog]=useState(null);
    const [showEditablePopup,setShowEditablePopup]=useState(false);

    const [liked, setLiked] = useState(false);

    useEffect(() => {
      localStorage.setItem("blogs", JSON.stringify(props.blogs));
    }, [props.blogs]);

    const deleteBlog = (id) => {
        // console.log(id);
        const updatedBlogs =  props.blogs.filter((blog) => blog.Id !== id);
        props.setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        localStorage.setItem("blog_count",parseInt(localStorage.getItem("blog_count")-1));
      };

       const readBlogHandle = (id) => {
          const readingBlog=props.blogs.find((blog) => blog.Id === id);
          const updatedBlogs = props.blogs.map((blog) =>
            blog.Id === id ? { ...blog, Read_count: (parseInt(blog.Read_count) || 0)+ 1 }: blog);
          props.setBlogs(updatedBlogs);
          localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      
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
        <div key={props.Id} className="text-center flex rounded  shadow-lg bg-white m-1 p-5 hover:shadow-lg hover:bg-blue-200">
          
          <div className='justify-around w-3/4 '>
          <img src={props.Image} alt="blog image" className='rounded-3xl w-80 h-50'/>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
          <h2 className="text-2xl rounded-sm p-2 w-auto bold shadow-xl text-black bg-blue-100"> {props.Title} </h2>
          
          <p className="text-black rounded-lg text-l bg-blue-50 shadow-2xs p-2">{props.Description}</p>
          </div>
          
          

          <button onClick={() => setLiked(!liked)} className="p-2 rounded-full">
            <Heart size={25}  strokeWidth={1} absoluteStrokeWidth 
            fill={liked ? "red" : "none"} color={liked ? "pink" : "black"} /></button>

          <div className="flex justify-between items-center gap-2 rounded-[20px] px-1 py-1">
            <div><Eye size={23} strokeWidth={1} absoluteStrokeWidth />
            {props.Read_count/2}
          </div>

            <button type="button"onClick={() => readBlogHandle(props.Id)} className="bg-gray-200 rounded-lg px-3 py-2 hover:underline">
              Read             
              {showPopup && selectedBlog?.Id === props.Id && ( <ReadBlogPopup blog={selectedBlog} />)}
            </button>
            
            <button type="button" onClick={() => editBlog(props.Id)} className="bg-gray-200 rounded-lg px-3 py-2 hover:underline">
            <Pencil strokeWidth={1} absoluteStrokeWidth /> 
            {showEditablePopup && seletedEditBlog?.Id === props.Id && ( <EditPopup blog={seletedEditBlog} />)}  
            </button>

            <button type="button" onClick={() => deleteBlog(props.Id)} className="bg-red-200 rounded-lg px-3 py-2 hover:underline">
            <Trash2 strokeWidth={1} absoluteStrokeWidth /></button>
          </div>
        </div>
    </>   
  )
}

export default BlogCard
