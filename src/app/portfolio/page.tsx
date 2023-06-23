import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { portfolios } from "@/constants/Constant";
import React from "react";


const page = () => {
  return (
    <div>
      <SectionTitle title="Portfolio" subtitle="Welcome My portfolio" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-32">
        {
          portfolios.map(item => <SinglePortfolio key={item.name} portfolio={item} />)
        }
        
      </div>
    </div>
  );
};

export default page;
