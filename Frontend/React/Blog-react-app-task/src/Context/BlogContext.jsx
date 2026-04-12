import { useState } from "react";
import { createContext } from "react";

export let Blog = createContext();

export let BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("blogs")) || []);

  const published = blogs.filter((b) => b.status === "publish" || b.status === "published");
  const drafts = blogs.filter((b) => b.status === "draft");

   const [editBlog, setEditBlog] = useState(null)//Edit blog

  //revise
  const togglePublished = (id) =>{
    //console.log(id)
    const updatedBlogs = blogs.map((blog)=>{
      
      if(blog.id === id ){
        console.log("before " ,blog)
        return {...blog  , status : blog.status === "draft" ? "published" : "draft"}
      }
      return blog
    })
    setBlogs(updatedBlogs)//single blog set hojayega
    console.log("after" ,updatedBlogs)
    localStorage.setItem("blogs" , JSON.stringify(updatedBlogs))//changes reflect in localStorage 

  }

  //Blogs delete
  const handleDeleteBlog = (id) => {
    let filterBlogs =  blogs.filter((blog)=> blog.id !== id)
    setBlogs(filterBlogs)
     localStorage.setItem("blogs", JSON.stringify(filterBlogs));
  }
   //Blog Edit
   let handleBlogEdit = (blog) =>{
    const updatedData = {...blog , }

   }
  return (
    <Blog.Provider value={{ blogs, setBlogs, published, drafts , togglePublished , handleDeleteBlog , handleBlogEdit,
      editBlog , setEditBlog

    }}>
      {children}
    </Blog.Provider>
  );
};
