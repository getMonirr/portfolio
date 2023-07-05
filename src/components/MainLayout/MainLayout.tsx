"use client";

import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import HomeContainer from "@/components/Shared/HomeContainer/HomeContainer";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex justify-center min-h-screen relative">
      {/* left side bar */}
      <div className="">
        <button
          onClick={() => setIsShow(!isShow)}
          className="get-btn lg:hidden block"
        >
          {isShow ? (
            <IoClose className="h-8 w-8 transition duration-700" />
          ) : (
            <HiMenuAlt2 className="h-8 w-8 transition duration-700" />
          )}
        </button>
      </div>
      <div
        style={{
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        }}
        className={`w-[200px] h-[calc(100vh-200px)] lg:fixed top-24 left-10 items-center justify-center lg:flex transition duration-300 ${
          isShow
            ? "block min-h-screen left-0 top-52 z-50 bg-get-bg-2 transition duration-700"
            : "hidden"
        }`}
      >
        <LeftSidebar isShow={isShow} setIsShow={setIsShow} />
      </div>
      {/* main */}
      <div className="flex-1 lg:ml-[250px]">
        <HomeContainer isShow={isShow}>{children}</HomeContainer>
      </div>
    </div>
  );
};

export default MainLayout;
