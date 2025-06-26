import React from "react";

const Projects = () => {
  return (
    
      <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block mb-10">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow hover:scale-[1.02] transition"
              >
                <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  This is a sample description for project {i}. It's placed here just to test layout and page transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default Projects;
