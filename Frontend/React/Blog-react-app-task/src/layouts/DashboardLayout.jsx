import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { Blog } from "../Context/BlogContext";
import { Auth } from "../Context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { blogs, published, drafts , togglePublished , handleDeleteBlog , handleBlogEdit , setEditBlog } = useContext(Blog);
  const { loggedInUser } = useContext(Auth);

  //user Login nhi hai tuh  /auth/login page pe redirect kro
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/auth/login");
    }
  }, [loggedInUser, navigate]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1A67AD]">
              Author Studio
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827]">
              Manage your publication dashboard,{" "}
              {loggedInUser ? loggedInUser.name : ""}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748B]">
              Review published posts, keep drafts organized, and create new
              stories from a cleaner writing workspace.
            </p>
          </div>
          <button
            onClick={() => navigate("/authordashboard/new")}
            className="inline-flex h-12 items-center justify-center gap-1 rounded-2xl bg-[#1A67AD] px-5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(26,103,173,0.22)] transition hover:bg-[#145994]"
          >
            <span className="text-lg leading-none">+</span>
            New Article
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
            <p className="text-sm font-medium text-[#64748B]">Total Articles</p>
            <p className="mt-3 text-3xl font-semibold text-[#111827]">
              {blogs.length}
            </p>
          </div>
          <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8F6F1] p-5">
            <p className="text-sm font-medium text-[#64748B]">Published</p>
            <p className="mt-3 text-3xl font-semibold text-[#111827]">
              {published.length}
            </p>
          </div>
          <div className="rounded-[24px] border border-[#E2E8F0] bg-[#EEF6FF] p-5">
            <p className="text-sm font-medium text-[#64748B]">Drafts</p>
            <p className="mt-3 text-3xl font-semibold text-[#111827]">
              {drafts.length}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-[#111827]">
          Your Articles
        </h2>

        {blogs.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-[#CBD5E1] bg-white/80 px-6 py-16 text-center shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
            <p className="text-2xl font-semibold text-[#111827]">
              No blogs yet
            </p>
            <p className="mt-3 text-sm leading-6 text-[#64748B]">
              Click "New Article" to start your first post.
            </p>
          </div>
        ) : (
          // published & drafts blogs render here
          <div className="space-y-4">
            {blogs.map((blog) => {
              const isDraft = blog.status === "draft";
              const updatedAt = blog.updatedAt
                ? new Date(blog.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Apr 10, 2026";

              return (
                <div
                  key={blog.id}
                  className="rounded-[28px] border border-[#E2E8F0] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-2xl font-semibold text-[#111827]">
                          {blog.title}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            isDraft
                              ? "border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B]"
                              : "bg-[#EFF6FF] text-[#1A67AD]"
                          }`}
                        >
                          {isDraft ? "Draft" : "Published"}
                        </span>
                      </div>

                      <p className="mt-4 line-clamp-3 max-w-3xl text-sm leading-7 text-[#64748B]">
                        {blog.excerpt || blog.content}
                      </p>

                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-[#94A3B8]">
                        Last updated..... {updatedAt}
                      </p>
                    </div>
                    {/* By Shadcn UI */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="ml-4 rounded-md p-2 hover:bg-gray-100 cursor-pointer">
                          <Ellipsis/>
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="border-b">
                          <span className="text-black/70">View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                         onClick={()=> {
                            setEditBlog(blog)
                            navigate("/authordashboard/new");
                          }}
                        className="border-b">
                          <span className="text-black/70"
                          >Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                        //  publish unPublish Toggle
                          onClick={()=> togglePublished(blog.id)}

                          className="border-b"
                        >
                          <span className="text-black/70">
                           
                        {isDraft ? 'Publish' : 'unPublish' }
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            handleDeleteBlog(blog.id);
                          }}
                          className="border-b"
                        >
                          <span className="text-red-500">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
