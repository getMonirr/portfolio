"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// @ts-ignore
const ActiveLink = ({ href, activeClassName, children, exact, ...props }) => {
  const path = usePathname();
  const active = exact ? exact === path : path.startsWith(href);
  const classes = classNames(props.className, active && activeClassName);
  if (classes) {
    props.className = classes;
  }

  console.log(path);

  return (
    <Link
      className={`${path === "/about" ? "text-blue-400" : "text-yellow-400"}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
// @ts-ignore
const classNames = (...args) => args.filter(Boolean).join(" ");
