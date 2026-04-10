const BlogCard = ({ blog }) => {
  const previewText = blog?.excerpt || blog?.content || "No preview available yet.";
  const formattedDate = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Just now";
  const authorName = blog?.authorName || "Rohit Singh Pokhariya";
  const tagItems = blog?.tags
    ? String(blog.tags)
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : ["General"];

  return (
    <article className="flex min-h-[410px] flex-col rounded-[22px] border border-[#D9DDE4] bg-white p-8 shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
      <div className="flex flex-wrap gap-2">
        {tagItems.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#F3F4F6] px-3 py-1 text-[0.95rem] font-medium text-[#111111]"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-5 text-[2rem] font-semibold leading-[1.18] tracking-[-0.04em] text-[#111111]">
        {blog?.title || "Untitled article"}
      </h3>

      <p className="mt-10 flex-1 text-[1rem] leading-10 text-[#4B5563]">
        {previewText}
      </p>

      <div className="mt-10 flex items-start justify-between gap-4 text-[#4B5563]">
        <div className="flex items-start gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1 shrink-0"
            aria-hidden="true"
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
          </svg>
          <span className="text-[0.95rem] leading-8">{authorName}</span>
        </div>

        <div className="flex items-start gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1 shrink-0"
            aria-hidden="true"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <span className="text-[0.95rem] leading-8">{formattedDate}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
