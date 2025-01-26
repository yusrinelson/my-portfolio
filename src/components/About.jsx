import { layout } from "./style";

const About = () => {
  return (
    <div name="about" className={`${layout.sectionGtoB} text-white`}>
      <div className={layout.sectionDisplay}>
        <div className="pb-8">
          <p className="text-gray-400">get to know more</p>
          <h2 className={`${layout.sectionHeadText}`}>About Me</h2>
        </div>
        <p className="mt-2 md:text-xl">
          I am an aspiring individual specializing in Software
          Development, with a robust skill set in various programming languages and frameworks. Currently, I am actively pursuing opportunities for a Junior Development position where I can leverage my proficiency and
          enthusiasm for learning. As a motivated individual with a proactive
          approach to challenges, I bring strong communication skills and a
          collaborative mindset to any team environment. My adaptability and
          quick learning abilities allow me to thrive in dynamic settings,
          ensuring I contribute effectively to project goals.
        </p>

        <br />

        <p className="md:text-xl">
          I am deeply committed to continuous improvement and believe in the
          importance of staying updated with emerging technologies in the
          ever-evolving landscape of web development. My passion for making a
          positive impact extends beyond coding, as I enjoy engaging in outdoor
          activities and occasional gaming, which also serve to refresh and
          recharge my creativity. I am eager to bring my dedication, skills, and
          positive attitude to a team where I can contribute to meaningful
          projects while furthering my professional growth.
        </p>
      </div>
    </div>
  );
};

export default About;
