"use client";
import { Dna } from "react-loader-spinner";

const SiteLoading = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export default SiteLoading;
