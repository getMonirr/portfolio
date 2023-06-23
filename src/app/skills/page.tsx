import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import SingleSkills from "@/components/Skills/SingleSkills";
import nodeJs from "../../../public/icons/nodejs.svg";

import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

const page = () => {
  return (
    <div className="mb-32">
      <SectionTitle title="Skills" subtitle="Meet my skills" />
      <div>
        <div className="pb-12">
          <h2 className="text-4xl font-bold text-get-secondary mb-5">
            I am Specialized in
          </h2>
          <h3 className="flex gap-2 items-center text-2xl uppercase">
            <TfiAngleRight className="h-6 w-6" /> animation here
          </h3>
        </div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">
            Front-End Development
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleSkills title="Javascript" number={4} logo={nodeJs} />
            <SingleSkills title="Typescript" number={4} logo={nodeJs} />
            <SingleSkills title="Next.js" number={4} logo={nodeJs} />
            <SingleSkills title="React.js" number={4} logo={nodeJs} />
            <SingleSkills title="HTML5" number={5} logo={nodeJs} />
            <SingleSkills title="Tailwind" number={5} logo={nodeJs} />
            <SingleSkills title="Bootstrap" number={5} logo={nodeJs} />
            <SingleSkills title="Material UI" number={3} logo={nodeJs} />
            <SingleSkills title="Ant Design" number={3} logo={nodeJs} />
          </div>
        </div>
        <div className="h-[1px] bg-[#121415] w-full mt-12 mb-12"></div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Back-End Development</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleSkills title="Javascript" number={4} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="MongoDB" number={3} logo={nodeJs} />
            <SingleSkills title="Express" number={3} logo={nodeJs} />
            <SingleSkills title="JWT" number={4} logo={nodeJs} />
            <SingleSkills title="Firebase" number={3} logo={nodeJs} />
          </div>
        </div>
        <div className="h-[1px] bg-[#121415] w-full mt-12 mb-12"></div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Tools & Packages</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleSkills title="React dev tools" number={4} logo={nodeJs} />
            <SingleSkills title="Git & GitHub" number={5} logo={nodeJs} />
            <SingleSkills title="Chrome Dev tools" number={5} logo={nodeJs} />
            <SingleSkills title="VS Code" number={5} logo={nodeJs} />
            <SingleSkills title="Netlify" number={3} logo={nodeJs} />
            <SingleSkills title="Vercel" number={3} logo={nodeJs} />
            <SingleSkills title="Figma" number={4} logo={nodeJs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
