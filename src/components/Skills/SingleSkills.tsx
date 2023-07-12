import Image from "next/image";
import IconBtn from "../Shared/GetButton/IconBtn";

const SingleSkills = ({
  title,
  number,
  logo,
}: {
  title: string;
  number: number;
  logo: string;
}) => {
  const maxSpans = 5;
  return (
    <div>
      {/* <div className="grid grid-cols-2 items-center justify-content-center  gap-4"> */}
      <div className="flex items-center gap-4">
        <IconBtn>
          <Image
            width={20}
            height={20}
            className="text-white"
            alt="image"
            src={logo}
          />
        </IconBtn>
        <span>{title}</span>
        {/* generate span depends on number */}

        <div className="space-x-px mt-2 ml-auto  lg:mr-8 xl:mr-16 2xl:mr-40">
          {[...Array(maxSpans)].map((_, index) => (
            <span
              key={index}
              className={`inline-block h-3.5 w-3.5 ${
                index < number
                  ? "bg-gradient-to-tr from-blue-700 to-blue-500"
                  : "bg-slate-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleSkills;
