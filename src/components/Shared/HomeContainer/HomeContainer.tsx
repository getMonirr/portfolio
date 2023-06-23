"use client";

import React from "react";

const HomeContainer = ({
  children,
  isShow,
}: {
  children: React.ReactNode;
  isShow: boolean;
}) => {
  return (
    <div
      className={`container mx-auto lg:pl-20 lg:pr-8 transition duration-500 `}
    >
      {children}
    </div>
  );
};

export default HomeContainer;
