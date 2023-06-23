"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import modalImage from "../../../public/images/blog-03.jpg";
import ContactBtn from "../Shared/GetButton/ContactBtn";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const PortfolioModal = ({
  closeModal,
  isOpen,
  portfolio,
}: {
  closeModal: () => void;
  isOpen: boolean;
  portfolio: object;
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-get-bg-2 p-4 pb-8 lg:p-12 text-left align-middle shadow-xl transition-all group relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="overflow-hidden">
                      <Image
                        src={modalImage}
                        alt="image"
                        className="group-hover:scale-110 transition duration-300 rounded-xl"
                      />
                    </div>
                    <div className="">
                      <p className="text-[#878e99] leading-[30px] mb-2 text-sm">
                        {" "}
                        Feature - Design
                      </p>
                      <h1 className="font-bold text-3xl text-get-secondary mb-5">
                        {portfolio.name}
                      </h1>
                      <p className="text-[#878e99] text-lg leading-[30px] mb-[20px]">
                        {portfolio.details}
                      </p>
                      <p>Technologies</p>
                      <div className=" flex flex-wrap gap-3 mt-4">
                        {portfolio.technologies.map((tech) => (
                          <button
                            key={tech}
                            className="bg-[#22332B] py-1 px-3 text-[#22c55e]"
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-col lg:flex-row  lg:items-center justify-between mt-8">
                        <Link href={portfolio.client}>
                          <ContactBtn className="w-full">GitHub client</ContactBtn>
                        </Link>
                        <Link href={portfolio.server}>
                          <ContactBtn className="w-full">GitHub server</ContactBtn>
                        </Link>
                        <Link href={portfolio.url}>
                          <ContactBtn className="w-full">Live site</ContactBtn>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={closeModal}
                    className="absolute right-4 top-2 px-4 py-3 text-get-secondary transition duration-300 cursor-pointer hover:text-get-primary rounded-full "
                    style={{
                      background: "linear-gradient(145deg, #1e2024, #23272b)",
                      boxShadow:
                        "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                    }}
                  >
                    <button>
                      <IoClose className="h-6 w-6" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PortfolioModal;
