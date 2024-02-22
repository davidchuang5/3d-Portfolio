import { Link } from 'react-router-dom';

import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow"> Work</span> 💻
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
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"></img>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Click here to see!
              </Link>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
