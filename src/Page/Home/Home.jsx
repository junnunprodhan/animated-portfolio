import { TypeAnimation } from "react-type-animation";
const img = "https://i.ibb.co/ts6fs6p/Remini20220221000233124.jpg";
import "./Home.css";
import { FaDownload, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const image = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const Text = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const span = " Welcome to my website";
  const split = span.split("");

  return (
    <div
      id="particles.js"
      className=" md:flex w-full h-screen md:px-0 md:gap-48 px-3 font-[Poppins]"
    >
      <div className=" md:w-6/12 md:rounded-md  rounded-full w-full md:pl-16 flex justify-center items-center">
        <motion.div
          className=" "
          variants={image}
          initial="hidden"
          animate="visible"
        >
          <img
            className=" md:w-[400px] md:h-[400px] object-cover border-red-400 border-2 hidden md:block rounded-full"
            src={img}
            alt=""
            title="Kawsar Hasan Joy"
          />
        </motion.div>

        <motion.div
          variants={image}
          initial="hidden"
          animate="visible"
          className=" relative rounded-full  md:w-6/12 w-80 h-80 mx-auto  overflow-hidden md:hidden"
        >
          <img
            className=" rounded-full w-80 h-80 object-cover"
            src={img}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        variants={Text}
        animate="visible"
        initial="hidden"
        className=" md:w-8/12 md:flex justify-center items-center md:mt-0 mt-5 mx-auto "
      >
        <div className=" w-full text-start space-y-4 md:mt-0 mt-20">
          <p className=" text-xl ">Hi!</p>
          <p className=" md:text-3xl text-xl uppercase hover:text-red-600">
            {split.map((item, index) => {
              return (
                <span style={{ transitionDelay: `${index * 30}ms` }}>
                  {item}
                </span>
              );
            })}
          </p>
          <p className=" md:text-xl text-[10px] mt-3 mb-4">
            <TypeAnimation
              sequence={["REACT DEVELOPER", 1000, "MERN STACK DEVELOPER", 1000]}
              speed={40}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </p>

          <div className=" flex gap-4 h-10 items-center ">
            <Link to={"https://github.com/kawsarhasanjoy1"}>
              {" "}
              <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <BsGithub className="" size={30} />
              </p>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/kawsar-hasan-joy-a86652287/"}
            >
              <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <BsLinkedin className="" size={30} />
              </p>
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100077015388756"}
            >
              <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <FaFacebook className="" size={30} />
              </p>
            </Link>
          </div>
          <div className="mt-4 md:space-x-8 space-x-2 flex items-center ">
            {/* <button
              data-aos="fade-right"
              className=" bg-red-600 md:px-6 px-2 py-2   border-[#00FFFF] hover:bg-white hover:text-black rounded-[3px] drop-shadow-lg"
            >
              <p className="flex gap-2 items-center">
                <FaDownload />
                Download Resume
              </p>
            </button> */}
            <button className="text-xl box-border border-2 border-red-700 w-52 h-10 bg-red-600 text-white relative group">
              <span className="pr-8">Download Resume</span>
              <span className="bg-red-400 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-8 duration-300">
                <FaDownload />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
