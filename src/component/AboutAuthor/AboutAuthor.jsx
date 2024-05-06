import React, { useEffect, useRef } from "react";
const img = "https://i.ibb.co/cYwmV7k/rsz-421432016-224067600772623-2294725046532783139-n.jpg";
import "./edin.css";
import { FaFacebook, FaFlag } from "react-icons/fa";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const AboutAuthor = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: 200, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className=" grid grid-cols-1 gap-10 md:grid-cols-2 mt-20 md:gap-40 mx-auto"
    >
      <div className="space-y-5 md:w-11/12 mx-auto">
        <p className=" text-xl md:text-3xl font-['Poppins'] text-center">
          I am a MERN-Stack Web Developer
        </p>
        <hr className=" border-[1px] mt-3" />
        <p className="font-['Poppins'] text-start">
          I am Junnun Prodhan form Bangladesh. I am Learning Programming every
          single day. I have some projects with MERN-Stack. I am a hard working
          person. I always learn new technologies everyday.
        </p>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-4 items-center ">
            <FaFlag size={30} />
            <p className=" text-xl">Bangladesh</p>
          </div>
          <div className=" flex gap-4 items-center hover:text-blue-800 cursor-pointer">
            <MdCall size={30} />
            <p className=" text-xl">+8801884248898</p>
          </div>
          <div className=" flex gap-4 items-center hover:text-blue-800 cursor-pointer">
            <MdEmail size={30} />
            <p className=" text-xl">junnunprodhan@gmail.com</p>
          </div>
          <div className=" flex gap-4 items-center">
            <MdLocationPin size={30} />
            <p className=" text-xl">Matlab,Chandpur</p>
          </div>
        </div>
        <div className=" flex gap-4 h-10 items-center ">
          <Link to={"https://github.com/junnunprodhan"}>
            {" "}
            <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
              <BsGithub className="" size={30} />
            </p>
          </Link>
          <Link to={"https://www.linkedin.com/in/md-junnun-prodhan/"}>
            <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
              <BsLinkedin className="" size={30} />
            </p>
          </Link>
          <Link to={"https://www.facebook.com/profile.php?id=100010419976460"}>
            <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
              <FaFacebook className="" size={30} />
            </p>
          </Link>
        </div>
      </div>
      <div className=" relative rounded-lg overflow-hidden md:w-9/12">
        <img className=" w-[400px] object-cover h-[488px]" src={img} alt="" />
        <div className="absolute bg-gradient-to-r from-orange-700 via-orange-400 to-transparent w-[400px] h-[488px] animate-spin-slow  origin-bottom-right -top-[50%] -left-[50%]"></div>

        <div className="absolute bg-gradient-to-r from-green-700 via-green-400 to-transparent w-[400px] h-[488px]  animate-spin-delay origin-bottom-right -top-[50%] -left-[50%] delay-5000"></div>

        <div className=" absolute inset-1 rounded-lg ">
          <img
            className="  w-[398 px] h-[480px] object-cover rounded-lg "
            src={img}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutAuthor;
