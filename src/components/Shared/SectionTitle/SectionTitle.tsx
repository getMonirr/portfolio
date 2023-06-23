import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="pt-12 lg:pt-24 pb-8 lg:pb-16 text-center">
      <h2 className="font-semibold text-4xl lg:text-6xl text-get-body-text"> {title} </h2>
      <div className="w-[100px] my-4 h-[1px] bg-get-primary mx-auto"></div>
      <h4 className="text-[14px] text-get-gray uppercase">{subtitle}</h4>
    </div>
  );
};

export default SectionTitle;
