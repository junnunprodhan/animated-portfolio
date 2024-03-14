import React, { useEffect, useRef } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { useAnimation, motion, useInView } from "framer-motion";

const ContactInfo = () => {
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
    hidden: { opacity: 0, x: 50, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial="hidden"
      className=""
    >
      <div className=" text-start mb-6 mx-2">
        <p className=" font-bold text-2xl mb-4">Contact Information</p>
        <p>
          Don't hesitate to get in touch; I'm just a message away. Whether
          you're interested in my work, looking for a skilled professional, or
          simply want to chat about the latest trends in our industry, I'd love
          to hear from you. Your feedback and ideas are always welcome.
        </p>
      </div>
      <div className=" space-y-5 shadow-2xl mx-2  ">
        <div className="border rounded-lg shadow-2xl bg-gray-800 text-start flex md:gap-5 gap-3 md:pl-5 pl-3 py-8 text-white">
          <div>
            <p className=" text-[#00FFFF] bg-[#bef6f6] md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full">
              <BiPhoneCall size={20} />
            </p>
          </div>
          <div>
            <p className=" font-bold font-[Radio Canada,sans-serif] text-xl mb-3 ">
              Contact on phone
            </p>
            <p className=" hover:text-[#00FFFF]">+8801405951898</p>
            <p className=" hover:text-[#00FFFF]">+8801967154464</p>
          </div>
        </div>

        <div className="border rounded-lg shadow text-white bg-gray-800 text-start flex md:gap-5 gap-3 md:pl-5 pl-3 py-8">
          <div>
            <p className=" text-[#00FFFF] bg-[#bef6f6] md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full">
              <AiOutlineMail size={20} />
            </p>
          </div>
          <div>
            <p className=" font-bold font-[Radio Canada,sans-serif] text-xl mb-3 ">
              Contact on mail
            </p>
            <p className=" hover:text-[#00FFFF] ">
              kawsarhasahjoy342@gmail.com
            </p>
            <p className=" hover:text-[#00FFFF]">
              kawsarhasahjoy1234@gmail.com
            </p>
          </div>
        </div>

        <div className="border rounded-lg text-white shadow bg-gray-800 text-start flex md:gap-5 gap-3 pl-3 md:pl-5 py-8">
          <div>
            <p className=" text-[#00FFFF] bg-[#bef6f6] md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full">
              <FaAddressCard size={30} />
            </p>
          </div>
          <div>
            <p className=" font-bold font-[Radio Canada,sans-serif] text-xl mb-3 ">
              Contact address
            </p>
            <p className=" hover:text-[#00FFFF]">Gouripur,Mymensingh</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
