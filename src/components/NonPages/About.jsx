import { CgArrowRight } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export const About = () => {
  return (
    <div
      className="w-10/12 h-full lg:w-4/6 mx-auto flex flex-col lg:flex-row justify-between gap-8"
      id="about"
    >
      {/* Text Section */}
      <div className="flex flex-col gap-8 w-full lg:w-[50%]">
        <div>
          <p className="text-2xl">Meet Me</p>
          <hr className="w-10 h-0.5 mt-1" />
        </div>
        <p className="w-full lg:w-[80%]">
          A passionate storyteller who finds joy in weaving words into
          captivating worlds. <br />
          <br /> With a love for exploring the complexities of human emotions
          and the intricacies of the world around us, I create stories that
          resonate deeply with readers. Each book I write is a journey—sometimes
          into the realm of imagination and at other times into the heart of
          reality. <br />
          <br />
          When I’m not writing, you’ll find me immersed in the pages of a book,
          discovering new ideas, or wandering through nature seeking inspiration
          for the next story. <br />
          <br />
          Welcome to my literary world—let’s embark on a journey together!
        </p>
        <a
          href="#contact"
          className="flex gap-4 text-sec items-center hover:bg-tet hover:text-primary rounded-full py-2 hover:px-4 w-fit"
        >
          <p className="font-semibold">Contact Me</p>
          <CgArrowRight />
        </a>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-[45%] h-[650px] lg:h-auto flex relative rounded-tr-2xl rounded-bl-2xl"
        style={{
          backgroundImage: `url("/download.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-12 h-[60%] self-start right-0 absolute flex flex-col">
          <div className="w-full flex-grow bg-white rounded-tr-2xl flex flex-col justify-center items-center gap-6">
            <a href="" className="text-primary text-2xl">
              <FaXTwitter />
            </a>
            <a href="" className="text-primary text-2xl">
              <ImFacebook />
            </a>
            <a href="" className="text-primary text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="" className="text-primary text-2xl">
              <FaTiktok />
            </a>
          </div>
          <div className="w-full h-2 bg-primary"></div>
          <div className="w-full h-2 bg-white"></div>
        </div>
      </div>
    </div>
  );
};
