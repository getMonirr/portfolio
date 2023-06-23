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
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Back-End Development</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
          </div>
        </div>
        <div className="h-[1px] bg-[#121415] w-full mt-12 mb-12"></div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Back-End Development</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
          </div>
        </div>
        <div className="h-[1px] bg-[#121415] w-full mt-12 mb-12"></div>
        <div>
          <h3 className="border-l-2 pl-4 mb-6 text-lg">Back-End Development</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
            <SingleSkills title="Node.js" number={3} logo={nodeJs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
