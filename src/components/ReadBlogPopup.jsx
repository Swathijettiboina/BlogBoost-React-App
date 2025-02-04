import React from "react";

export const ReadBlogPopup = ({ blog }) => {
  if (!blog) return null;

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div className="p-4 m-5 mt-5 g-5">
      <h2 className="text-5xl font-extrabold italic">{blog.Title}</h2>
      <div className="float-left shadow-2xl">
        <img src={blog.Image} alt="blog" className="w-90 h-60 rounded-2xl"/>
      </div>
        <div className="">
          <div className="p-5 gap-3">
          {/* <p > {blog.Description} </p> */}
          <p>{blog.Content}</p>
          </div>
        </div>

          <div className="flex justify-center">
            <button onClick={handleClose} className="w-32 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
              Close </button>
          </div>
        </div>
    </div>
  );
};

export default ReadBlogPopup;
