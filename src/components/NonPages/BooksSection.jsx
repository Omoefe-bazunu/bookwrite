import { CgArrowRight } from "react-icons/cg";

export const BookSection = () => {
  return (
    <div className="bg-tet w-full py-20">
      <div className="w-10/12 h-full lg:w-4/6  mx-auto flex flex-col lg:flex-row justify-between gap-8 text-primary">
        {/* Text Section */}
        <div className="flex flex-col gap-8 w-full lg:w-[50%]">
          <div>
            <p className="text-2xl font-semibold text-sec">My Books</p>
            <hr className="w-10 h-0.5 mt-1 bg-sec" />
          </div>
          <p className="w-full lg:w-[80%]">
            Explore my collection of captivating stories, where imagination
            meets reality, crafted to inspire, entertain, and leave a lasting
            impression.
          </p>
          <a href="#contact" className="flex gap-4 text-sec items-center">
            <p className="font-semibold">See All Books</p>
            <CgArrowRight />
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[70%] h-fit lg:h-96 flex flex-col lg:flex-row gap-8 flex-grow">
          <div
            className="w-full lg:w-[45%] h-[650px] lg:h-full flex shadow-md"
            style={{
              backgroundImage: `url("./src/assets/heart.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-full lg:w-[45%] h-[650px] lg:h-full flex mt-8 shadow-md"
            style={{
              backgroundImage: `url("./src/assets/book.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
