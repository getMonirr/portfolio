import React from "react";

const ContactBtn = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <button
      className={`contact-btn px-8 py-4 text-get-primary mt-8 font-medium ${className}`}
    >
      <span className="z-10">{children}</span>
    </button>
  );
};

export default ContactBtn;
