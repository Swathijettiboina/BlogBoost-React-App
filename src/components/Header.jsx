import React from "react";
import {Link} from "react-router";
const Header = () => {
  return (
    <div>
    <div className="flex justify-between bg-gray-100 p-2">
      <div className="flex justify-center italic items-center w-screen-full h-20 ">
        <img className="w-20 h-20 rounded-[10px]" src='/logo-blog-boost.webp' />
        <p className="text-black text-5xl sans-serif font-bold">Blog Boost</p>
      </div>

       <div className="flex flex-row justify-between items-center gap-5 p-5">
        <Link to="/" className="border-1 p-2 rounded-md hover:bg-gray-400">Home</Link>
        <Link to="/addblog" className="border-1 p-2 rounded-md hover:bg-gray-400">Add Blog</Link>
        <Link to="/about" className="border-1 p-2 rounded-md hover:bg-gray-400">About</Link>
        <Link to="#" className="border-1 p-2 rounded-md hover:bg-gray-400">Profile</Link>
      </div> 
    </div>
    </div>
  );
};

export default Header;