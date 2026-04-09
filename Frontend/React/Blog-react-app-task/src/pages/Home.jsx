import React from "react";

const Home = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to <span className="text-primary">Inkwell</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          Discover thoughtful articles on technology, programming, and software engineering from passionate writers.
        </p>
      </section>

      {/* Blog Section */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Articles</h2>
          <span className="text-sm text-muted-foreground">3 articles</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <a href="/blog/1">
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              
              <div className="px-6 pb-3">
                <div className="flex flex-wrap gap-2">
                  <span className="badge">React</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">Web Development</span>
                </div>

                <h2 className="text-xl font-semibold mt-2 group-hover:text-primary">
                  Getting Started with React Hooks
                </h2>
              </div>

              <div className="px-6 pb-4">
                <p className="text-muted-foreground line-clamp-3">
                  Learn how React Hooks can simplify your component logic and make your code more reusable.
                </p>
              </div>

              <div className="px-6 flex justify-between text-sm text-muted-foreground">
                <span>👤 Sarah Chen</span>
                <span>📅 January 15, 2024</span>
              </div>

            </div>
          </a>

          {/* Card 2 */}
          <a href="/blog/2">
            <div className="bg-card flex flex-col gap-6 rounded-xl border py-6 shadow-sm group h-full hover:shadow-lg">
              
              <div className="px-6 pb-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="badge">Node.js</span>
                  <span className="badge">API</span>
                  <span className="badge">Backend</span>
                </div>

                <h2 className="text-xl font-semibold mt-2 group-hover:text-primary">
                  Building Scalable APIs with Node.js
                </h2>
              </div>

              <div className="px-6 pb-4">
                <p className="text-muted-foreground">
                  Explore best practices for creating robust and scalable REST APIs using Node.js and Express.
                </p>
              </div>

              <div className="px-6 flex justify-between text-sm text-muted-foreground">
                <span>👤 Sarah Chen</span>
                <span>📅 January 20, 2024</span>
              </div>

            </div>
          </a>

          {/* Card 3 */}
          <a href="/blog/3">
            <div className="bg-card flex flex-col gap-6 rounded-xl border py-6 shadow-sm group h-full hover:shadow-lg">
              
              <div className="px-6 pb-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="badge">Programming</span>
                  <span className="badge">Best Practices</span>
                  <span className="badge">Software Engineering</span>
                </div>

                <h2 className="text-xl font-semibold mt-2 group-hover:text-primary">
                  The Art of Clean Code
                </h2>
              </div>

              <div className="px-6 pb-4">
                <p className="text-muted-foreground">
                  Discover the principles and practices that separate good code from great code.
                </p>
              </div>

              <div className="px-6 flex justify-between text-sm text-muted-foreground">
                <span>👤 Marcus Johnson</span>
                <span>📅 February 1, 2024</span>
              </div>

            </div>
          </a>

        </div>
      </section>

    </main>
  );
};

export default Home;