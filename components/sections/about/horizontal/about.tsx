import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';

function About() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="about"
    >
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex flex-col items-center lg:items-start">
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              About
            </h2>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
              Me
            </h2>
          </Reveal>
        </div>
        <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I am a young web developer student, passionate about back-end
          technologies and open-source projects ! In my spare time I love
          tinkering with technologies like VR, body tracking and electronics. I
          also use Unity, Blender and Substance Painter to use on some personal
          projects. I am currently looking for an internship in web development
          to improve my skills and learn new ones ! And to finish, I love
          hiking, photography and video games.
          <br />
          <span className="text-cyan-800">I use Arch btw :)</span>
          <br />
          <span className="text-green-800">
            <a href="/#contact">Contact me</a>
          </span>
        </p>
        {/* Download resume button */}
        <div className="mt-8 flex justify-center">
          <a
            className="inline-block rounded-lg bg-cyan-800 px-6 py-3 text-lg font-semibold text-white hover:bg-cyan-700"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download my resume
          </a>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
