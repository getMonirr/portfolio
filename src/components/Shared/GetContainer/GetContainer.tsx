import React from "react";

const GetContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-3 lg:px-0">{children}</div>;
};

export default GetContainer;
