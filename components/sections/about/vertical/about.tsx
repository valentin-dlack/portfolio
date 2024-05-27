import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

function About() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200  py-24 dark:border-gray-700 lg:py-32"
      id="about"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a young web developer student, passionate about back-end
              technologies and open-source projects ! In my spare time I love
              tinkering with technologies like VR, body tracking and
              electronics. I also use Unity, Blender and Substance Painter to
              use on some personal projects. I am currently looking for an
              internship in web development to improve my skills and learn new
              ones ! And to finish, I love hiking, photography and video games.
              I use Arch btw :).
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
