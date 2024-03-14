import { useAnimation, motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProjectCart = ({ cart }) => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

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
    hidden: { opacity: 0, scale: 0.9, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`relative  border border-gray-200 rounded-lg shadow  bg-gray-800 dark:border-gray-700  hover:-translate-y-2  hover:transition-colors hover:delay-300 hover:duration-500 mr-6 mt-20 pb-7 h-[600px] text-white`}
    >
      <div>
        <div>
          <div className="mx-auto">
            <div>
              <div className="relative max-w-full h-60 overflow-hidden">
                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                  <img
                    src={cart.img}
                    alt="image"
                    className="w-full object-cover object-top "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-5 mt-5 md:px-4 mx-2">
            <p className=" text-start font-bold md:text-2xl text-xl font-[Poppins] px-2">
              {cart.name}
            </p>
            <p className=" text-start  font-[Poppins] mt-3">
              {cart.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {cart.option2.map((item) => {
                return (
                  <div key={item.label}>
                    <p className=" bg-[#00FFFF] px-4 text-black hover:bg-[#80ffffc5] rounded-md border-b-2 border-b-orange-300">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" absolute bottom-3 w-full">
          <Link>
            <button
              onClick={() => handleClick(cart.link)}
              className="bg-[#00FFFF] w-full font-bold text-black btn btn-sm hover:bg-white "
            >
              Live Link
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCart;
