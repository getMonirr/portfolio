"use client";

import { menu } from "@/constants/Constant";

import React from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div>
      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex gap-4 items-start get-btn w-[200px] py-4 justify-start pl-6`}
          >
            <item.icon className="h-[20px] w-[20px]" />
            <Link href={`${item.path}`} className="uppercase text-base">
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
