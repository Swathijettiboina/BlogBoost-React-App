import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, Heart, Pencil, Trash2 } from 'lucide-react';
import ReadBlogPopup from './ReadBlogPopup';
import EditPopup from './EditPopup';

const BlogCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [seletedEditBlog, setSeletedEditBlog] = useState(null);
  const [showEditablePopup, setShowEditablePopup] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.Like_count || 0);
  const [celebrate, setCelebrate] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(props.blogs));
  }, [props.blogs]);

  const handleLike = () => {
    setLiked(!liked); // Toggle the liked state
    setLikeCount(liked ? likeCount - 1 : likeCount + 1); // Update like count based on liked state
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 1000);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = props.blogs.filter((blog) => blog.Id !== id);
    props.setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    localStorage.setItem('blog_count', parseInt(localStorage.getItem('blog_count') - 1));
  };

  const readBlogHandle = (id) => {
    const readingBlog = props.blogs.find((blog) => blog.Id === id);
    const updatedBlogs = props.blogs.map((blog) =>
      blog.Id === id ? { ...blog, Read_count: (parseInt(blog.Read_count) || 0) + 1 } : blog
    );
    props.setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setSelectedBlog(readingBlog);
    setShowPopup(true);
  };

  const editBlog = (id) => {
    const editableBlog = props.blogs.find((blog) => blog.Id === id);
    setSeletedEditBlog(editableBlog);
    setShowEditablePopup(true);
  };

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <>
<div key={props.Id} className="text-center flex rounded shadow-lg bg-white m-1 p-5 hover:shadow-lg transition-shadow hover:bg-blue-100">
        <div className="justify-around w-3/4">
          <img src={props.Image} alt="blog image" className="rounded-3xl w-80 h-50" />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex gap-3">
            <h2 className="text-2xl rounded-sm p-2 w-auto font-bold shadow-xl text-black bg-blue-100">
              {props.Title}
            </h2>
            {/* Share Button */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gray-200 rounded-lg shadow-xl px-3 py-2 cursor-pointer hover:underline"
              >
                <ExternalLink size={30} />
              </button>
              {/* Share Dropdown */}
              {isDropdownVisible && (
                <div className="absolute bg-white shadow-lg rounded-lg p-3 top-full left-0 w-48 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <button className="text-blue-500 hover:underline"><a href='https://www.facebook.com/' target='_blank'>Share on Facebook</a></button>
                    </li>
                    
                    <li>
                      <button className="text-purple-500 hover:underline"><a href='https://www.linkedin.com/' target='_blank'>Share on Linkedin</a></button>
                    </li>
                    <li>
                      <button className="text-blue-400 hover:underline"><a href='https://www.twitter.com/' target='_blank'>Share on Twitter</a></button>
                    </li>
                    <li>
                      <button className="text-green-500 hover:underline"><a href='https://www.whatsapp.com/' target='_blank'>Share on Whatsapp</a></button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <p className="text-black rounded-lg text-l bg-blue-50 shadow-2xs p-2">{props.Description}</p>
        </div>

        <div className="flex justify-between items-center gap-2 rounded-[20px] px-3 py-1">
          <div>
            <Eye size={23} strokeWidth={1} />
            {props.Read_count}
          </div>

          <div>
            <button
              onClick={handleLike}
              className={`rounded-full transform transition-all duration-300 ${celebrate ? 'scale-125' : 'scale-100'} ${
                liked ? 'text-red-500' : 'text-black'
              }`}
            >
              <Heart size={25} strokeWidth={1} fill={liked ? 'red' : 'none'} color={liked ? 'red' : 'black'} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => readBlogHandle(props.Id)}
            className="bg-gray-200 rounded-lg px-3 py-2 hover:underline"
          >
            Read
          </button>
          {showPopup && selectedBlog?.Id === props.Id && <ReadBlogPopup blog={selectedBlog} />}

          <button
            type="button"
            onClick={() => editBlog(props.Id)}
            className="bg-gray-200 rounded-lg px-3 py-2 hover:underline"
          >
            <Pencil strokeWidth={1} />
            {showEditablePopup && seletedEditBlog?.Id === props.Id && <EditPopup blog={seletedEditBlog} />}
          </button>

          <button
            type="button"
            onClick={() => deleteBlog(props.Id)}
            className="bg-red-200 rounded-lg px-3 py-2 hover:underline"
          >
            <Trash2 strokeWidth={1} />
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
