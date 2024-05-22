import heroImage from "../assets/heroimage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col flex-1 justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">Im a Web Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quam repudiandae repellat dignissimos iure ratione, quia eius at
            laboriosam eveniet quaerat impedit necessitatibus quos sint. Nemo
            aspernatur adipisci rerum inventore ea beatae, aliquam hic
            distinctio dolorum ipsa quas labore ipsum, corporis, alias
            voluptates sequi laborum temporibus! Perferendis similique soluta
            ab?
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-1/2 md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
