import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import PostForm from './Components/PostForm'
import PostUpload from './Components/PostUpload'

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const handleEdit = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className='min-h-screen w-[100%] bg-[#F4F2EE]'>
      <Navbar />
      <div className="post flex flex-col h-[100%] w-[100%] items-center justify-center">
        <PostUpload onPost={handleNewPost} />
        <PostForm posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App