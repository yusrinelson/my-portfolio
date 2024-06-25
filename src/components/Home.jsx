import heroImage from "../assets/heroimage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { layout } from "./style";

const Home = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/yusri-nelson/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/yusrinelson",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto:yusrinelson17@gmail.com",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: "/yusri-resume.pdf",
      style: "rounded-br-md",
      downlaod: true,
    },
  ];
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 pt-[150px]"
    >
      <div className={`${layout.sectionDisplay} flex-col-reverse md:flex-row`}>
        <div className="flex h-full flex-1 flex-col items-center justify-center md:items-start">
          <p className=" text-center text-gray-400 md:text-start">
            hello, i am
          </p>
          <h2 className="text-center text-4xl font-bold tracking-wider text-white sm:text-5xl md:text-start">
            Yusri Nelson
          </h2>
          <h4 className="text-center text-2xl font-bold tracking-wider text-cyan-500 sm:text-4xl md:text-start">
            Junior Web Developer
          </h4>
          <p className="max-w-md py-4 text-gray-500 ">
          As a Junior Web Developer, I am dedicated to crafting dynamic and compelling web interfaces that captivate users. With a robust proficiency in HTML, CSS, JavaScript, React and various other technologies. I possess the skills to architect responsive and intuitive websites. Committed to continuous growth, I approach challenges with a quick-learning mindset, constantly striving to expand my knowledge base and refine my expertise.
          </p>

          <div className="flex flex-wrap items-center justify-center">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className={`group ${layout.buttongradient}`}
            >
              Projects
              <span className="duration-300 group-hover:rotate-90">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="xl:hidden ">
              <ul className="ml-5 flex h-[51px] items-center justify-center rounded-md  ">
                {links.map(({ id, child, href, download }) => (
                  <li key={id} className={`bg-grayrounded-md hover:scale-105 text-cyan-400`}>
                    <a
                      href={href}
                      className="flex w-full items-center px-1  sm:px-2"
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={heroImage}
            alt="profile"
            className="mx-auto mb-10 w-1/2 rounded-full md:w-[300px] border-[1px] sm:border-2 border-cyan-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
