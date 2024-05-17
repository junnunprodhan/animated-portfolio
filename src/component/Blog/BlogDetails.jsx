import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
const BlogDetails = () => {
    const blogdetails =useLoaderData();
  const {description,img,title}=blogdetails.data;
  const ref = React.createRef();

    return (
        <div>
      <div ref={ref}>
      <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
     
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src={img}
          alt=""
        />
      </div>
      <div className="sm:text-center sm:p-4 md:text-center">

        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {title}{' '}
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
         {description}
        </p>

        <div className="flex items-center md:justify-center">
          <button>
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-slate-700 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
           Go To All Blog
          </Link>
          </button>
          
        </div>
      </div>
    </div>
    </div>
    </div>
    );
};

export default BlogDetails;