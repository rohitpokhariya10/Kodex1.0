import React, { useContext } from "react";
import BlogCard from "../Components/BlogCard";
import { Blog } from "../Context/BlogContext";

const Home = () => {
  const { blogs } = useContext(Blog);

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-balance text-[3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111111] sm:text-[4.5rem]">
          Welcome to <span className="text-[#1A67AD]">Inkwell</span>
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-[1.12rem] leading-10 text-[#4B5563] sm:text-[1.25rem]">
          Discover thoughtful articles on technology, programming, and software
          engineering from passionate writers.
        </p>
      </section>

      <section className="mt-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="text-[2.15rem] font-semibold tracking-[-0.04em] text-[#111111]">
            Latest Articles
          </h2>
          <span className="pb-1 text-[1rem] font-medium text-[#4B5563]">
            {blogs.length} {blogs.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <p className="text-2xl font-semibold text-[#111827]">No articles yet</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#64748B]">
              Your homepage is ready for a polished editorial feed. Publish the
              first story from the dashboard and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </main>
  ) 
  
};

export default Home;


