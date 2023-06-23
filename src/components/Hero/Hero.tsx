"use client";

import React from "react";
import ContactBtn from "../Shared/GetButton/ContactBtn";
import me from "../../../public/images/seturn.png";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${me.src})` }}
      className="flex flex-row items-center justify-center min-h-screen bg-no-repeat lg:bg-left-top relative  lg:gap-8"
    >
      <div>
        <h1 className="text-2xl lg:text-5xl text-get-body-text font-bold uppercase mb-4">
          Md. Monir Hoshen
        </h1>
        <p className="text-get-primary text-lg lg:text-2xl">
          Full Stack Developer
        </p>
        <div className="mt-7">
          <Link href="/about">
            <ContactBtn>About Me</ContactBtn>
          </Link>
        </div>
      </div>
      <div>
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json"
          style={{ height: "600px", color: "white" }}
        ></Player>
      </div>
    </div>
  );
};

export default Hero;
