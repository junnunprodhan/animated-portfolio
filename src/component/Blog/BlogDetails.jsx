import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { motion } from 'framer-motion';
const BlogDetails = () => {
    const blogdetails =useLoaderData();
  const {description,img,title}=blogdetails.data;
    return (

        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
          <motion.div
            className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
              src={img}
              alt={title}
            />
          </motion.div>
          <motion.div
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
              {title}
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg px-4 text-center lg:text-left">
              {description}
            </p>
            <motion.div
              className="flex items-center justify-center w-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="/blogs"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none"
              >
                Go To All Blog
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //     <div className="container mx-auto px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
    //       <motion.div
    //         className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg"
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <img
    //           className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
    //           src={img}
    //           alt={title}
    //         />
    //       </motion.div>
    //       <motion.div
    //         className="sm:mx-auto md:max-w-xl"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.3, duration: 0.5 }}
    //       >
    //         <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
    //           {title}
    //         </h2>
    //         <p className="mb-5 text-base text-gray-700 md:text-lg">
    //           {description}
    //         </p>
    //         <div className="flex items-center md:justify-center">
    //           <motion.button
    //             whileHover={{ scale: 1.1 }}
    //             whileTap={{ scale: 0.9 }}
    //           >
    //             <Link
    //               to="/blogs"
    //               className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-700 hover:bg-slate-800 focus:shadow-outline focus:outline-none"
    //             >
    //               Go To All Blog
    //             </Link>
    //           </motion.button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>







    //     <div className="container mx-auto px-4">
    //     <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
    //       <motion.div
    //         className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg"
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <img
    //           className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
    //           src={img}
    //           alt=""
    //         />
    //       </motion.div>
    //       <motion.div
    //         className="sm:auto mx-auto md:max-w-xl"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.3, duration: 0.5 }}
    //       >
    //         <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
    //           {title}
    //         </h2>
    //         <p className="mb-5 text-base text-gray-700 md:text-lg">
    //           {description}
    //         </p>
    //         <div className="flex items-center md:justify-center">
    //           <motion.button
    //             whileHover={{ scale: 1.1 }}
    //             whileTap={{ scale: 0.9 }}
    //           >
    //             <Link
    //               to="/blogs"
    //               className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-slate-700 text-white transition duration-200 rounded shadow-md hover:bg-slate-800 focus:shadow-outline focus:outline-none"
    //             >
    //               Go To All Blog
    //             </Link>
    //           </motion.button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    );
};

export default BlogDetails;