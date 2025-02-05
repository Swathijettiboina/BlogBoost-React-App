import React, { useEffect, useState } from "react";

export const ReadBlogPopup = ({ blog }) => {
  if (!blog) return null;

  const handleClose = () => {
    window.location.href = "/";
  };

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch comments from localStorage when the blog ID changes
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(blog.Id)) || [];
    setComments(storedComments);
  }, [blog.Id]);

  // Handle new comment submission
  const handleCommentSubmit = (id) => {
    if (newComment.trim()) {
      const newCommentObject = {
        id: Date.now(),
        text: newComment,
      };

      const existingComments = JSON.parse(localStorage.getItem(id)) || [];

      const updatedComments = [...existingComments, newCommentObject];

      setComments(updatedComments);

      localStorage.setItem(id, JSON.stringify(updatedComments));

      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-10">
      <div className="relative p-4 m-5 mt-5 g-5 bg-white rounded-lg max-h-[90%] overflow-y-auto">
        <h2 className="text-5xl font-extrabold italic mb-4">{blog.Title}</h2>

        <div className="float-left shadow-2xl m-4">
          <img src={blog.Image} alt="blog" className="w-90 h-60 rounded-2xl" />
        </div>

        <div className="p-10 gap-3 mb-16">
          <p>{blog.Content}</p>
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={handleClose}
            className="w-32 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Close
          </button>
        </div>

        <div className="fixed bottom-4 right-4 w-80 h-80 bg-white shadow-xl p-4 rounded-lg z-20">
          <p className="font-semibold text-lg">Do Comment Here</p>

          <div className="h-24 overflow-y-auto mb-2">
            {comments.length > 0 ? (
              comments
                .slice()
                .reverse()
                .map((comment) => (
                  <div key={comment.id} className="border-b py-1">
                    <p>{comment.text}</p>
                  </div>
                ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          {/* Comment Input */}
          <textarea
            className="w-full h-20 p-2 border rounded-lg mt-2"
            placeholder="Add your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)} 
          ></textarea>

 
          <button
            onClick={() => handleCommentSubmit(blog.Id)}
            className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBlogPopup;
