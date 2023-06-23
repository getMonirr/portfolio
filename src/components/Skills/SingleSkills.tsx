import Image from "next/image";

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
      <div className="flex items-center gap-4">
        <Image className="text-white" alt="image" src={logo} />
        <span>{title}</span>
        {/* generate span depends on number */}

        <div className="space-x-px mt-2 ml-auto mr-40">
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
