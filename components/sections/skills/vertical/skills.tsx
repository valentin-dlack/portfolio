import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import SkillCard from './skill-card';

import { skills } from '../config';

function Skills() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="skills"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Skills
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my skills.
            </p>
          </div>
          <div className="grid gap-4">
            {skills.map((project, index) => (
              <SkillCard
                key={index}
                name={project.name}
                description={project.description}
                Icon={project.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
