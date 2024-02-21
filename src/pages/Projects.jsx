import React from 'react';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow"> Projects</span> 👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've created many projects over the years. Here are some of my favorites. If you see
          something you like, feel free to check out the codebase and use it as inspiration for your
          own projects! Your collaboration is highly valued.
        </p>
      </div>
    </section>
  );
};

export default Projects;
