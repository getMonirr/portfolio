"use client"
import IconBtn from "@/components/Shared/GetButton/IconBtn";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import React from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiGithub,
  FiFigma,
  FiVoicemail,
} from "react-icons/fi";
import { MdOutlineAlternateEmail, MdPhoneIphone } from "react-icons/md";
import personImage from "../../../public/images/banner-03.png";
import { Player } from "@lottiefiles/react-lottie-player";

const page = () => {
  return (
    <div>
      <SectionTitle title="About Me" subtitle="I am monir From bangladesh" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="xl:mb-16">
          <div className="mb-20">
            <h3 className="font-medium text-[14px] mb-5 uppercase tracking-widest">
              Welcome my world
            </h3>
            <h1 className="text-4xl lg:text-6xl font-bold lg:leading-[75px] mb-6">
              Hi, I am <br />{" "}
              <span className="text-get-primary">Md. Monir</span>
              <br /> <span className="text-xl lg:text-6xl">Full Stack Developer</span>
            </h1>
            <p className="leading-[30px] text-get-body-text lg:mr-[16%]">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
            <div className="space-y-5 mt-10">
              <div className="flex gap-4 items-center">
                <MdOutlineAlternateEmail className="h-6 w-6 text-get-primary" />{" "}
                <span>getMonirr@gmail.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <MdPhoneIphone className="h-6 w-6 text-get-primary" />{" "}
                <span>+880 1771-909060</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-row lg:items-center  gap-y-8 lg:gap-y-0 lg:gap-x-32 xl:gap-x-10">
            <div>
              <h1 className="mb-5 text-[14px] uppercase font-light">
                FIND WITH ME
              </h1>
              <div className="flex items-center gap-6">
                <IconBtn>{<FiFacebook className="h-5 w-5" />}</IconBtn>
                <IconBtn>{<FiLinkedin className="h-5 w-5" />}</IconBtn>
                <IconBtn>{<FiGithub className="h-5 w-5" />}</IconBtn>
              </div>
            </div>
            <div>
              <h1 className="mb-5 text-[14px] uppercase  font-light">
                BEST SKILL ON
              </h1>
              <div className="flex items-center gap-6">
                <IconBtn>{<FiFigma className="h-5 w-5" />}</IconBtn>
                <IconBtn>{<FiFacebook className="h-5 w-5" />}</IconBtn>
                <IconBtn>{<FiFacebook className="h-5 w-5" />}</IconBtn>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <Image
            className=" p-4 rounded-lg mx-auto mt-8 lg:mt-16 xl:mt-0"
            style={{
              background: "linear-gradient(to right bottom, #212428, #16181c)",
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            }}
            alt="image"
            src={personImage}
          /> */}
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_sy6jjyct.json"
            // style={{ height: "800px" }}
            className="h-[400px] lg:h-[600px] xl:h-[800px]"
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default page;
