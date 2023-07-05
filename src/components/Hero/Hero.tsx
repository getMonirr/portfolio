"use client";

import React from "react";
import ContactBtn from "../Shared/GetButton/ContactBtn";
import me from "../../../public/images/seturn.png";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

// import resume from 'public/Md-Monir-Hoshen_MERN-Stack-Developer.pdf';

const Hero = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${me.src})` }}
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-no-repeat lg:bg-left-top relative  lg:gap-8"
    >
      <div className="mt-16 lg:mt-0">
        <h1 className="text-2xl lg:text-5xl text-get-body-text font-bold uppercase mb-4">
          Md. Monir Hoshen
        </h1>
        <p className="text-get-primary text-lg lg:text-2xl">
          Full Stack Developer
        </p>
        <div className="mt-7 flex lg:flex-row flex-col items-center lg:gap-8 gap-4">
          <Link href="/about">
            <ContactBtn>About Me</ContactBtn>
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=1FJi87ryrE3thGGbm1TWoivROe3ubDce5"
            download="Md-Monir-Hoshen_MERN-Stack-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactBtn>Download Resume</ContactBtn>
          </a>
        </div>
      </div>
      <div>
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json"
          // style={{ height: "600px", color: "white" }}
          className="lg:h-[600px]"
        ></Player>
      </div>
    </div>
  );
};

export default Hero;
