import React from 'react';
import ProjectCard from './project-card';

import Reveal from '@/components/reveal';

import { projects } from '../config';
import MotionWrap from '@/components/motion-wrap';

function Projects() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="projects"
    >
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
                Projects
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of the cool stuff I&apos;ve been working on. You can
            check them out on my GitHub !
          </p>
        </div>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              thumbnail={project.thumbnail}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
