import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
const Experince = ({ item }) => {
  const controls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isAtBottom = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isAtBottom) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, x: 200, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  return (
    <motion.section
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div>
        <div className=" border md:w-48 md:h-48  md:pt-10 pt-4 pb-4 font-bold font-mono bg-slate-800 opacity-90 hover:bg-slate-600 rounded-lg hover:transition-width duration-500 ease-in-our shadow-2xl cursor-pointer mx-auto">
          <p>
            {" "}
            <img
              className=" w-20 h-20 object-cover mx-auto rounded-full"
              src={item.img}
              alt=""
            />
          </p>
          <p className=" text-xl mt-2  text-white">{item.name}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experince;
