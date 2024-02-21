import { Link } from 'react-router-dom';

import { projects } from '../constants';
import { arrow } from '../assets/icons';

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

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="threads" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
