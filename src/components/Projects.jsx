import { projects } from "../constants";
import { layout } from "./style";
import { useState } from "react";
const Projects = () => {
  const [showDescription, setShowDescription] = useState(null);



  const handleMouseEnter = (e) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };

  const handleMouseLeave = (e) => {
    const vid = e.target;
    vid.muted = false;
    vid.pause();
  };

  const toggleDescription = (id) => {
    setShowDescription(showDescription === id ? null : id);
  };

  return (
    <div name="projects" className={`${layout.sectionGtoB} text-gray-400`}>
      <div className={layout.sectionDisplay}>
        <div className="pb-8">
          <p className="text-gray-400">browse my recent</p>
          <p
            className={`${layout.sectionHeadText} tracking-normal sm:tracking-wider`}
          >
            Projects
          </p>
        </div>
        

        <div className="sm:px7 md:12px grid gap-8  px-0 sm:grid-cols-2 sm:px-0 ">
          {projects.map(({ id, src, site, github, title, description }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600 ">
              <div className="relative">
                <video
                  src={src}
                  alt=""
                  controls
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="rounded-md duration-200 hover:scale-105 "
                />
                {showDescription === id && (
                  <div className="scale-in-center scale-in-center absolute top-0 min-h-[100%] w-full rounded-md bg-black/90 p-4 text-center text-white ">
                    <h5 className="font-bold lg:mb-6">{title}</h5>
                    <p className="text-sm">{description}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 text-center font-semibold tracking-wider text-white">
                {title}
              </div>
              <div className="flex justify-center space-x-4 m-4">
                <button className={layout.projectButton}>
                  <p>
                    <a href={site} target="_blank" rel="noreferrer">
                      webapp
                    </a>
                  </p>
                </button>
                <button
                  onClick={() => toggleDescription(id)}
                  className={layout.projectButton}
                >
                  description
                </button>
                <button className={layout.projectButton}>
                  <p>
                    <a href={github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
