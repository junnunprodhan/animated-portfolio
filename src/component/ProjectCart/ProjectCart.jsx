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
      className="relative group border border-purple-500/20 rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:-translate-y-4 hover:shadow-purple-500/25 transition-all duration-500 mr-6 mt-20 pb-7 h-[550px] text-white overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
      
      <div>
        <div>
          <div className="mx-auto">
            <div>
              <div className="relative max-w-full h-60 overflow-hidden rounded-t-xl">
                <motion.div 
                  className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 group-hover:-translate-y-[calc(100%-15rem)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={cart.img}
                    alt="image"
                    className="w-full object-cover object-top filter group-hover:brightness-110 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 gap-5 mt-5 md:px-4 mx-2">
            <motion.p 
              className="text-start font-bold md:text-2xl text-xl font-[Poppins] px-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              {cart.name}
            </motion.p>
            
            <p className="text-start font-[Poppins] mt-3 text-gray-300 group-hover:text-white transition-colors duration-300">
              {cart.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {cart.option2.map((item) => {
                return (
                  <motion.div 
                    key={item.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white rounded-full border border-purple-400/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                      {item.value}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <motion.button
              onClick={() => handleClick(cart?.link)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/30"
            >
              Live Link
            </motion.button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Link to={cart.codeLink} target="_blank">
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-bold text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500/30"
              >
                Github
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Floating Particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ 
            y: [-5, 5, -5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-8 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ 
            y: [5, -5, 5],
            x: [-2, 2, -2],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};
            >
              Github link
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCart;
