import React, { useEffect, useRef } from "react";
import { BiSolidBook } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { useAnimation, motion, useInView } from "framer-motion";

const MyResume = () => {
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
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      className=" md:flex md:w-full px-2 mt-10"
    >
      <div data-aos="fade-right" className=" md:w-6/12">
        <div className="grid flex-grow card rounded-box 2">
          <div className="flex gap-4 items-center">
            <p className=" text-[#00FFFF] mb-4">
              <BiSolidBook className="" size={20} />
            </p>
            <p className=" md:text-3xl text-md font-bold mb-4">
              Educational Qualification
            </p>
          </div>
          <p className="flex gap-2 mb-1 font-bold">
            <BsCalendarDate className=" text-[#00FFFF] mt-1" />
            2019-2022
          </p>
          <p className=" md:text-xl text-[#00FFFF] font-bold">
            Bsc degree
          </p>
          <p className=" font-mono  mt-1">
            I have completed Bachelor of Science in national university
          </p>
        </div>
        <div className="grid flex-grow card rounded-box ">
          <p className="flex gap-2 mb-1 font-bold">
            <BsCalendarDate className=" text-[#00FFFF] mt-1" />
            2017-2019
          </p>
          <p className=" md:text-xl text-[#00FFFF] font-bold">
            Higher Secondary School Certificate
          </p>
          <p className=" font-mono mt-1 ">
            I am completed Higher Secondary School Certificate in  science in Matlab government college
          </p>
        </div>
      </div>

      <div className="divider lg:divider-horizontal md:mt-20">
        <p className=" bg-[#00FFFF] w-7 h-7 rounded-full"></p>
      </div>

      <div data-aos="fade-left" className="md:w-6/12">
        <div className="grid flex-grow card rounded-box ">
          <div className="flex gap-4 items-center">
            <p className=" text-[#00FFFF] pb-2">
              <MdWorkHistory className="" size={20} />
            </p>
            <p className=" md:text-3xl text-md font-bold mb-2 md:mb-4">
              Working Experience
            </p>
          </div>
          <p className="flex gap-2 mb-1 font-bold">
            <BsCalendarDate className=" text-[#00FFFF] mt-1" />
            2022
          </p>
          <p className=" md:text-xl text-[#00FFFF] font-bold">
            Front-end Developer
          </p>
          <p className=" font-mono">
            I have completed Front-end developing from Programming hero course
            and other social platform{" "}
          </p>
        </div>
        <div className="grid flex-grow card rounded-box ">
          <p className="flex gap-2 mb-1 font-bold">
            <BsCalendarDate className=" text-[#00FFFF] mt-1" />
            2023
          </p>
          <p className=" md:text-xl text-[#00FFFF] font-bold">
            Full-stack Developer
          </p>
          <p className=" font-mono">
            I have competed Full-Stack developing from programming hero courses Level 2{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MyResume;
