import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

 const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/yusri-nelson/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/yusrinelson",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:yusrinelson17@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    downlaod: true,
  },
];

  return (
    <div className="hidden xl:flex fixed left-0 top-[35%] flex-col">
      <ul>
        {links.map(({ id, child, href, style, download}) => (
            <li key={id} className={`bg-gray ml-[-100px] flex h-14 w-40 items-center justify-between bg-gray-500 px-4 duration-300 hover:ml-[-10px] hover:rounded-md ${style}`}>
            <a
              href={href}
              className="flex w-full items-center justify-between text-white"
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
  );
};

export default SocialLinks;
