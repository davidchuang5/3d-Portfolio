import React from 'react';
import { experiences, skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow"> David</span> 👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          As a software engineer, I prioritize the creation of simple and scalable solutions. I love
          keeping up to date with new technologies and seeing what they have to offer. Proficient in
          the MERN stack and adept at exploring various frontend frameworks, I enjoy blending my
          interest in photography into my application designs, crafting sleek and minimalist
          layouts. When I'm not coding, I enjoy playing volleyball, surfing, and anything involving
          the ocean!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
