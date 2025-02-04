import React from "react";

export const ReadBlogPopup = ({ blog }) => {
  if (!blog) return null;

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/4 h-auto flex">
        <img
          src={blog.Image}
          alt="blog"
          className="w-1/2 h-auto object-contain rounded-full mr-8"
        />

        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center break-words">
            {blog.Title}
          </h2>

          <p className="text-gray-700 mb-4 bg-blue-100 p-3 rounded-md break-words">
            {blog.Description}
          </p>

          <p>{blog.Content}</p>

          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="w-32 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlogPopup;
