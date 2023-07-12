import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import SingleSkills from "@/components/Skills/SingleSkills";
import nodeJs from "../../../public/icons/nodejs.svg";
import javascript from "../../../public/icons/javascript.png";
import typescript from "../../../public/icons/Typescript_logo.png";
import ant from "../../../public/icons/ant.jpeg";
import bootstrap from "../../../public/icons/bootstrap.jpeg";
import chromeDev from "../../../public/icons/chrome-dev.jpeg";
import express from "../../../public/icons/express.png";
import figma from "../../../public/icons/figma.png";
import firebase from "../../../public/icons/fire.png";
import github from "../../../public/icons/git.png";
import html from "../../../public/icons/html.png";
import jwt from "../../../public/icons/jwt.png";
import mongo from "../../../public/icons/mongo.jpeg";
import mui from "../../../public/icons/mui.png";
import netlify from "../../../public/icons/net.png";
import node from "../../../public/icons/node.png";
import reactDev from "../../../public/icons/react-dev.jpeg";
import react from "../../../public/icons/react.png";
import tailwind from "../../../public/icons/tailwind.png";
import vercel from "../../../public/icons/vercel.png";
import vsCode from "../../../public/icons/vs.jpeg";
import next from "../../../public/icons/next.png";

import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import TypeAnimation from "@/components/Skills/TypeAnimation";

const Page = () => {
  return (
    <div className="mb-32">
      <SectionTitle title="Skills" subtitle="Meet my skills" />
      <div>
        <div className="pb-12">
          <h2 className="text-4xl font-bold text-get-secondary mb-5">
            I am Specialized in
          </h2>
          <h3 className="flex gap-2 items-center text-2xl uppercase">
            <TfiAngleRight className="h-6 w-6" />
            <TypeAnimation />
          </h3>
        </div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">
            Front-End Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-8 xl:grid-cols-3 ">
            <SingleSkills title="Javascript" number={4} logo={javascript.src} />
            <SingleSkills title="Typescript" number={4} logo={typescript.src} />
            <SingleSkills title="Next.js" number={4} logo={next.src} />
            <SingleSkills title="React.js" number={4} logo={react.src} />
            <SingleSkills title="HTML5" number={5} logo={html.src} />
            <SingleSkills title="Tailwind" number={5} logo={tailwind.src} />
            <SingleSkills title="Bootstrap" number={5} logo={bootstrap.src} />
            <SingleSkills title="Material UI" number={3} logo={mui.src} />
            <SingleSkills title="Ant Design" number={3} logo={ant.src} />
          </div>
        </div>
        <div className="h-[1px] bg-[#121415] w-full mt-12 mb-12"></div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Back-End Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-8 xl:grid-cols-3 ">
            <SingleSkills title="Javascript" number={4} logo={javascript.src} />
            <SingleSkills title="Node.js" number={3} logo={node.src} />
            <SingleSkills title="MongoDB" number={3} logo={mongo.src} />
            <SingleSkills title="Express" number={3} logo={express.src} />
            <SingleSkills title="JWT" number={4} logo={jwt.src} />
            <SingleSkills title="Firebase" number={3} logo={firebase.src} />
          </div>
        </div>
        <div className="h-[1px] bg-[#121415] w-full mt-12 mb-12"></div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Tools & Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-8 xl:grid-cols-3 ">
            <SingleSkills
              title="React dev tools"
              number={4}
              logo={reactDev.src}
            />
            <SingleSkills title="Git & GitHub" number={5} logo={github.src} />
            <SingleSkills
              title="Chrome Dev tools"
              number={5}
              logo={chromeDev.src}
            />
            <SingleSkills title="VS Code" number={5} logo={vsCode.src} />
            <SingleSkills title="Netlify" number={3} logo={netlify.src} />
            <SingleSkills title="Vercel" number={3} logo={vercel.src} />
            <SingleSkills title="Figma" number={4} logo={figma.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
