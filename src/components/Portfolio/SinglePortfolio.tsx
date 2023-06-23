"use client";

import Image from "next/image";
import languageImage from "../../../public/images/blog-03.jpg";
import { useState } from "react";
import PortfolioModal from "../Modal/PortfolioModal";
import Link from "next/link";

const SinglePortfolio = ({ portfolio }: { portfolio: object }) => {
  //  @ts-ignore
  const { stack, name, url } = portfolio;

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
    console.log("open");
  };

  return (
    <>
      <div
        className="w-full bg-get-bg-2 p-6 rounded-xl shadow-get-shadow-1 group"
        style={{
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        }}
      >
        <figure className="overflow-hidden rounded-xl">
          <Image
            className="rounded-xl group-hover:scale-110 transition duration-500"
            src={languageImage}
            alt="image"
          />
        </figure>
        <div>
          <div>
            <h4 className="text-sm text-get-primary my-4">{stack}</h4>
            <h1 className="text-2xl font-medium text-get-body-text">{name}</h1>
          </div>
          <div className="flex justify-evenly lg:justify-end gap-6 mt-8 items-center">
            <button
              onClick={openModal}
              className="contact-btn py-2 lg:py-4 px-4 lg:px-8 "
            >
              See Details
            </button>
            <Link href={url}>
              <button className="contact-btn py-2 lg:py-4 px-4 2xl:px-8">
                Live
              </button>
            </Link>
          </div>
        </div>
      </div>
      <PortfolioModal
        portfolio={portfolio}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default SinglePortfolio;
