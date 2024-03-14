// import { data } from "browserslist";
// import React from "react";

// const Footer = () => {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="bg-gray-800 py-5 text-center hidden md:block">
//       <p className=" font-bold flex justify-center items-center text-white">&copy; {year} All rights reserved By <p className=" hover:text-red-400"> MD Junnun Prodhan</p>.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
const img = "https://i.ibb.co/cYwmV7k/rsz-421432016-224067600772623-2294725046532783139-n.jpg";

const Footers = () => {
  return (
    <div>
      <section className="bg-black">
        <div className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className=" font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl  lg:text-7xl">
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              Junnun
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Prodhan
              </span>{" "}
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <p className="font-medium">
              A Full-Stack Web Developer building the Full-stack of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img className="rounded-full" src={img} width="40" height="40" />
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              © Copyright 2022 Junnun Prodhan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
