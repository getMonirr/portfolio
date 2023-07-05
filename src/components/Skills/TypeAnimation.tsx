"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeAnimation = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end Development",
      "Full Stack Development",
      "React",
      "Next Js",
    ],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <>
      <span className="text-get-primary">{text}</span>
      <Cursor cursorColor="text-get-primary" />
    </>
  );
};

export default TypeAnimation;
