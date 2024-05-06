import React, { useEffect, useRef } from "react";
import RadialProgress from "../shered/RadialProgress/RadialProgress";
import SectionTitle from "../shered/SectionTitle/SectionTitle";
import Experince from "../Experience/Experince";
import { motion, useAnimation, useInView } from "framer-motion";
import skill from "../../../public/skill.json";

const Skill = () => {
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
    hidden: { opacity: 0, x: -200, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section className="mt-10 mx-auto px-2 font-[Poppins]">
      <div>
        <SectionTitle titleF={"My"} titleS={"Skill"} />
      </div>

      <div className="mt-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className=" grid md:grid-cols-4 grid-cols-1 gap-4"
        >
          <div data-aos="fade-right">
            <RadialProgress
              progress={90}
              persent={90}
              name={"Font-end Development"}
            />
          </div>
          <div>
            <RadialProgress
              progress={80}
              persent={80}
              name={"Back-end Development"}
            />
          </div>
          <div>
            <RadialProgress
              progress={75}
              persent={75}
              name={"Mern-Stack Development"}
            />
          </div>
          <div>
            <RadialProgress
              progress={70}
              persent={70}
              name={"Full-Stack Development"}
            />
          </div>
        </motion.div>
        <div className="mt-20">
          <section className=" text-center mx-auto">
            <p
              data-aos="fade-down"
              className="font-bold mb-10 mt-20 md:text-4xl text-2xl "
            >
              <span className=" font-[Poppins]">Skill And</span> Technologies
            </p>
            <progress className="progress w-20 h-1 bg-green-500 mb-10"></progress>
            <motion.div className=" grid md:grid-cols-5 gap-5 mx-auto grid-cols-2 text-center">
              {skill.map((item) => (
                <Experince item={item} key={item.num} />
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default Skill;
