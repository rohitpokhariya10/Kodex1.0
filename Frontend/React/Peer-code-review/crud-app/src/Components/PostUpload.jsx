import { useState, useRef } from "react";
import profile from "../assets/profile.jpg";

const PostUpload = ({ onPost }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const photoRef = useRef();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handlePost = () => {
    if (!text.trim() && !image) return;
    onPost({ id: Date.now(), text, image });
    setText("");
    setImage(null);
  };

  return (
    <div className="w-[40%] flex flex-col gap-1 bg-white border border-gray-300 rounded-md mt-7">

      {/* TOP — profile + text input */}
      <div className="top flex items-center gap-5 justify-around p-4">
        <img className="h-[50px] w-[50px] rounded-3xl" src={profile} alt="profile" />
        <div className="h-[50px] w-[500px] flex items-center bg-white border border-gray-400 rounded-3xl">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start a post"
            className="bg-transparent outline-none w-full text-sm py-8 px-4 placeholder:font-semibold placeholder:text-gray-700 placeholder:text-[15px]"
          />
        </div>
      </div>

      {/* IMAGE PREVIEW — photo select hone ke baad yahan dikhega */}
      {image && (
        <div className="relative px-4 pb-2">
          <img
            src={image}
            alt="preview"
            className="w-full max-h-[220px] object-cover rounded-lg border border-gray-200"
          />
          <button
            onClick={() => setImage(null)}
            className="absolute top-2 right-6 bg-white rounded-full px-2 py-0.5 text-xs font-semibold text-gray-600 border border-gray-300 hover:bg-gray-100"
          >
            ✕ Remove
          </button>
        </div>
      )}

      {/* BOTTOM — icons + Post button */}
      <div className="bottom px-[60px] py-5 flex items-center justify-between border-t border-gray-100">

        {/* Video */}
        <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
          <svg className="h-[24px] w-[24px] text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3.5l4 4v-11l-4 4z" />
          </svg>
          <h1 className="text-sm text-gray-800 font-semibold">Video</h1>
        </div>

        {/* Photo — clicking opens file picker */}
        <label className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
          <svg className="h-[24px] w-[24px] text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM5 5h14v10l-3.5-3.5a2 2 0 00-2.83 0L9 15l-1.5-1.5a2 2 0 00-2.83 0L5 15V5zm0 14l3.5-3.5 2 2L13.5 14l5.5 5H5z" />
          </svg>
          <h1 className="text-sm text-gray-800 font-semibold">Photo</h1>
          <input ref={photoRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
        </label>

        {/* Write Article */}
        <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
          <svg className="h-[24px] w-[24px] text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5h18v2H3V5zm0 4h12v2H3V9zm0 4h18v2H3v-2zm0 4h12v2H3v-2z" />
          </svg>
          <h1 className="text-sm text-gray-800 font-semibold">Write Article</h1>
        </div>

        {/* POST button */}
        <button
          onClick={handlePost}
          disabled={!text.trim() && !image}
          className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
            text.trim() || image
              ? "bg-[#0a66c2] text-white hover:bg-[#004182] cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostUpload;