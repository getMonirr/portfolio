import ContactForm from "@/components/ContactForm/ContactForm";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Contact me"
        subtitle="Enter your name and email and your message, then click send button for sending email, i will contact with you as soon as possible via mail"
      />
      <ContactForm />
    </div>
  );
};

export default page;
