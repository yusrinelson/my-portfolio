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
      href: "/",
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
          <h4 className="text-center text-2xl font-bold tracking-wider text-white sm:text-4xl md:text-start">
            Junior Web Developer
          </h4>
          <p className="max-w-md py-4 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quam repudiandae repellat dignissimos iure ratione, quia eius at
            laboriosam eveniet quaerat impedit necessitatibus quos sint. Nemo
            aspernatur adipisci rerum inventore ea beatae, aliquam hic
            distinctio dolorum ipsa quas labore ipsum, corporis, alias
            voluptates sequi laborum temporibus! Perferendis similique soluta
            ab?
          </p>

          <div className="flex flex-wrap items-center justify-center">
            <Link
              to="portfolio"
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
        <div>
          <img
            src={heroImage}
            alt="profile"
            className="mx-auto mb-10 w-1/2 rounded-full md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
