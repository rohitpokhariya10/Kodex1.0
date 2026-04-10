import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Blog } from "../Context/BlogContext";
import { useNavigate } from "react-router";

const BlogForm = () => {
  const { blogs, setBlogs, isPublish, setIsPublish } = useContext(Blog);
  const navigate = useNavigate();
  const inputClass =
    "w-full rounded-2xl border border-[#D6DCE5] bg-white px-4 py-3 text-[15px] text-[#0F172A] shadow-[0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-[#94A3B8] focus:border-[#1A67AD] focus:ring-4 focus:ring-[#1A67AD]/10";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    const newBlog = {
      id: Date.now(),
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      tags: data.tags,
      createdAt: new Date(),
      status: isPublish,
    };

    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    reset();
    navigate("/authordashboard");
  };
 
  let navig = useNavigate()
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col items-start gap-6">
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
      onClick={()=> navig('/authordashboard')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left mr-2 h-4 w-4"
          aria-hidden="true"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Back to Dashboard
      </button>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="overflow-hidden rounded-[32px] border border-white/80 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
      >
        <div className="border-b border-[#E2E8F0] px-8 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1A67AD]">
            New Article
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827]">
            Write and publish your next story
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#64748B]">
            Draft a polished article with a clean, modern editor layout.
          </p>
        </div>

        <div className="grid gap-8 px-8 py-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Title
              </label>
              <input
                placeholder="Enter your article title"
                className={`${inputClass} ${errors.title ? "border-red-400 bg-red-50" : ""}`}
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Excerpt
              </label>
              <textarea
                rows={3}
                placeholder="Short summary of your article"
                className={`${inputClass} resize-none ${errors.excerpt ? "border-red-400 bg-red-50" : ""}`}
                {...register("excerpt", { required: "Excerpt is required" })}
              />
              {errors.excerpt && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.excerpt.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Content
              </label>
              <textarea
                rows={11}
                placeholder="Write your full article content here..."
                className={`${inputClass} resize-none ${errors.content ? "border-red-400 bg-red-50" : ""}`}
                {...register("content", {
                  required: "Content is required",
                })}
              />
              {errors.content && (
                <p className="text-red-500 text-xs mt-0.5">
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#111827]">
                Publishing Notes
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                A strong title, a sharp excerpt, and clear tags help your
                article feel ready for readers.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0F172A]">
                Tags
                <span className="ml-1.5 text-xs font-normal text-[#94A3B8]">
                  (optional)
                </span>
              </label>
              <input
                placeholder="e.g. react, javascript, webdev"
                className={inputClass}
                {...register("tags")}
              />
            </div>

            <div className="rounded-[28px] border border-[#E2E8F0] bg-[#F8F6F1] p-6">
              <p className="text-sm font-medium text-[#64748B]">Preview Feel</p>
              <p className="mt-2 text-xl font-semibold text-[#111827]">
                Clean, editorial, and ready to publish.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#E2E8F0] px-8 py-6 sm:flex-row sm:justify-end">
          <button
            onClick={() => setIsPublish("draft")}
            type="submit"
            className="h-12 rounded-2xl border border-[#CBD5E1] bg-white px-5 text-sm font-semibold text-[#334155] transition hover:bg-[#F8FAFC]"
          >
            Save as Draft
          </button>
          <button
            onClick={() => setIsPublish("publish")}
            type="submit"
            className="h-12 rounded-2xl bg-[#1A67AD] px-5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(26,103,173,0.22)] transition hover:bg-[#145994]"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
