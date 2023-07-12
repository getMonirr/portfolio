"use client";

import { menu } from "@/constants/Constant";

import React, { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

const LeftSidebar = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: Function;
}) => {
  const [is768pxScreen, setIs768pxScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIs768pxScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Check initial screen size on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    if (is768pxScreen) {
      // Call your function here for mobile devices with 320px screen size
      console.log("Clicked on mobile device with 320px screen size");
      setIsShow(!isShow);
    }
  };

  return (
    <div>
      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex gap-4 items-start get-btn w-[200px] py-4 justify-start pl-6`}
          >
            <item.icon className="h-[20px] w-[20px]" />
            <Link
              onClick={handleClick}
              href={`${item.path}`}
              className="uppercase text-base"
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* {menu.map((item) => (
          <li key={item.title}>
            <ActiveLink
              exact={item.path === "/"}
              href={item.path}
              activeClassName="text-red-500"
            >
              {item.title}
            </ActiveLink>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default LeftSidebar;
