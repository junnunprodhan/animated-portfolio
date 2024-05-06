import { useForm } from "@formspree/react";
import toast from "react-hot-toast";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvnodlw");
  if (state.succeeded) {
    toast.success("message send successful");
  }

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
    hidden: { opacity: 0, x: -50, rotateY: 180, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.form
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial="hidden"
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2380877f' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="shadow-2xl dark:bg-gray-800 dark:border-gray-700 mt-[50px] md:px-10 px-2 py-6 border rounded-lg space-y-[19px] text-black md:text-white">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold text-white">Name</span>
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full text-black dark:text-white  border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-white">Email</span>
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full text-black dark:text-white  border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-white">Subject</span>
          </label>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            className="input input-bordered w-full text-black dark:text-white  border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-white">Subject</span>
          </label>
          <textarea
            required
            type="text"
            id="message"
            name="message"
            placeholder="Enter message"
            className="input input-bordered w-full text-black dark:text-white h-36 border-[#00FFFF] rounded-sm "
          />
        </div>
        <div className=" text-start">
          <button
            type="submit"
            disabled={state.submitting}
            className=" bg-green-500 text-black  uppercase px-8 py-2 rounded-sm hover:bg-white font-[ Radio Canada,sans-serif]"
          >
            SEND
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;