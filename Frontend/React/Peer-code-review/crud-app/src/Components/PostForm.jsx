import { useState } from "react";
import profile from "../assets/profile.jpg";

const PostForm = ({ posts, onEdit, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editImage, setEditImage] = useState(null);

  const startEdit = (post) => {
    setEditId(post.id);
    setEditText(post.text);
    setEditImage(post.image);
  };

  const saveEdit = () => {
    onEdit({ id: editId, text: editText, image: editImage });
    setEditId(null);
  };

  if (posts.length === 0) {
    return (
      <div className="w-[40%] bg-white border border-gray-300 rounded-md mt-7 min-h-[100px] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Koi post nahi hai abhi. Upar se post karo!</p>
      </div>
    );
  }

  return (
    <div className="w-[40%] flex flex-col gap-4 mt-7">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border border-gray-300 rounded-md overflow-hidden">

          {/* ── EDIT MODE ── */}
          {editId === post.id ? (
            <div className="p-4 flex flex-col gap-3">
              {/* Profile row */}
              <div className="flex items-center gap-3">
                <img className="h-[45px] w-[45px] rounded-3xl" src={profile} alt="profile" />
                <p className="font-semibold text-sm text-gray-900">Your Name</p>
              </div>

              {/* Text edit */}
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none resize-none min-h-[80px] focus:border-[#0a66c2]"
                placeholder="Edit your post..."
              />

              {/* Image preview in edit */}
              {editImage && (
                <div className="relative">
                  <img src={editImage} alt="edit preview" className="w-full max-h-[200px] object-cover rounded-md border border-gray-200" />
                  <button
                    onClick={() => setEditImage(null)}
                    className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5 text-xs font-semibold text-gray-600 border border-gray-300 hover:bg-gray-100"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Change photo in edit */}
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM5 5h14v10l-3.5-3.5a2 2 0 00-2.83 0L9 15l-1.5-1.5a2 2 0 00-2.83 0L5 15V5zm0 14l3.5-3.5 2 2L13.5 14l5.5 5H5z" />
                </svg>
                <span className="text-sm text-blue-500 font-medium">Change Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setEditImage(URL.createObjectURL(file));
                  }}
                />
              </label>

              {/* Save / Cancel */}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setEditId(null)}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-400 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-[#0a66c2] text-white hover:bg-[#004182]"
                >
                  Save
                </button>
              </div>
            </div>

          ) : (

            /* ── VIEW MODE ── */
            <>
              {/* Post header */}
              <div className="flex items-start justify-between p-4 pb-2">
                <div className="flex items-center gap-3">
                  <img className="h-[45px] w-[45px] rounded-3xl" src={profile} alt="profile" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Your Name</p>
                    <p className="text-xs text-gray-500">Software Developer · Just now</p>
                  </div>
                </div>

                {/* Edit / Delete buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(post)}
                    className="flex items-center gap-1 text-xs text-gray-600 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {/* Edit icon */}
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(post.id)}
                    className="flex items-center gap-1 text-xs text-red-500 border border-red-300 px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                  >
                    {/* Delete icon */}
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>

              {/* Post text */}
              {post.text && (
                <p className="px-4 pb-3 text-sm text-gray-800 leading-relaxed">{post.text}</p>
              )}

              {/* Post image — yahan PostUpload se aayi photo dikhegi */}
              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="w-full object-cover max-h-[350px]"
                />
              )}

              {/* Like / Comment row */}
              <div className="flex justify-around border-t border-gray-200 px-2 py-1">
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3m7-10l-4 4 4 4m-4-4h12a2 2 0 012 2v7a2 2 0 01-2 2H11" />
                  </svg>
                  Like
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  Comment
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                  </svg>
                  Repost
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostForm;