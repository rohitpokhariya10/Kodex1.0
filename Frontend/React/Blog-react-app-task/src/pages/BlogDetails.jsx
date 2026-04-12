import { Blog } from "@/Context/BlogContext";
import { NavLink, useParams } from "react-router";
import { useContext } from "react";

const BlogDetails = () => {
  let { published } = useContext(Blog);
  let { id } = useParams();


  //Published blogs pe find lagake find kar rhe hai user ne kis blog pe click kra vo pura blog miljayega
  const blog = published.find((b) => {
    console.log(b.id , id)
    return b.id == id
  });
  console.log("User opened this blog--->" , blog)

  
//   if (!blog) {
//     return <h1>Blog not found</h1>;
//   }

  return (
  <main className="mx-auto max-w-3xl px-4 py-12">
  <a
    className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
    href="/"
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
      className="mr-2 h-4 w-4"
    >
      <path d="m12 19-7-7 7-7"></path>
      <path d="M19 12H5"></path>
    </svg>
    Back to Articles
  </a>

  <article>
    <header className="mb-8">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
          Node.js
        </span>
        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
          API
        </span>
        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
          Backend
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Building Scalable APIs with Node.js
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
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
            className="h-4 w-4"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Sarah Chen</span>
        </div>

        <div className="flex items-center gap-1.5">
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
            className="h-4 w-4"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <span>January 20, 2024</span>
        </div>

        <div className="flex items-center gap-1.5">
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
            className="h-4 w-4"
          >
            <path d="M12 6v6l4 2"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span>1 min read</span>
        </div>
      </div>
    </header>

    <div className="prose max-w-none">
      <p>
        Creating scalable APIs is crucial for modern web applications. Node.js
        provides excellent tools for building fast, efficient backend services.
      </p>

      <h2>Architecture Patterns</h2>
      <p>When building APIs, consider these patterns:</p>

      <h3>RESTful Design</h3>
      <p>Follow REST principles for predictable, standardized endpoints.</p>

      <h3>Middleware Pattern</h3>
      <p>Use middleware for authentication, logging, and error handling.</p>

      <h3>Database Optimization</h3>
      <p>
        Implement proper indexing and query optimization for better performance.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use environment variables for configuration</li>
        <li>Implement proper error handling</li>
        <li>Add rate limiting for security</li>
        <li>Use caching strategically</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        A well-designed API forms the backbone of any modern application.
      </p>
    </div>
  </article>
</main>
  
  );
};

export default BlogDetails;  
      
      