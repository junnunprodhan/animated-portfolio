import { TypeAnimation } from "react-type-animation";
const img = "https://i.ibb.co/cYwmV7k/rsz-421432016-224067600772623-2294725046532783139-n.jpg";
import "./Home.css";
import { FaDownload, FaFacebook, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";

const Home = () => {
  const image = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 1.5,
        type: "spring",
        stiffness: 100
      } 
    },
  };
  const Text = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: 1.5,
        type: "spring",
        stiffness: 100,
        delay: 0.3
      } 
    },
  };
  
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const span = " Welcome to my website";
  const split = span.split("");

  return (
    <motion.div
      id="particles.js"
      className="relative md:flex w-full h-screen md:px-0 md:gap-48 px-3 font-[Poppins] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-purple-400 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <HiSparkles size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-blue-400 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <FaStar size={30} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-green-400 opacity-20"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiSparkles size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-40 text-pink-400 opacity-20"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <FaStar size={25} />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>

      <div className=" md:w-6/12 md:rounded-md  rounded-full w-full md:pl-16 flex justify-center items-center">
        <motion.div
          className="relative"
          variants={image}
          initial="hidden"
          animate="visible"
        >
          <div className="relative hidden md:block">
            {/* Glowing Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-black"></div>
            </motion.div>
            
            {/* Main Image */}
            <motion.img
              className="relative z-10 md:w-[400px] md:h-[400px] object-cover rounded-full shadow-2xl"
              src={img}
              alt=""
              title="Md Junnun Prodhan"
              animate={floatingAnimation}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Floating Particles */}
            <motion.div
              className="absolute -top-5 -right-5 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              animate={{ 
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
              animate={{ 
                y: [10, -10, 10],
                x: [5, -5, 5],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={image}
          initial="hidden"
          animate="visible"
          className="relative rounded-full md:w-6/12 w-80 h-80 mx-auto overflow-hidden md:hidden"
        >
          <div className="relative">
            {/* Mobile Glowing Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-black"></div>
            </motion.div>
            
            <motion.img
              className="relative z-10 rounded-full w-80 h-80 object-cover shadow-2xl"
              src={img}
              alt=""
              animate={floatingAnimation}
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        variants={Text}
        animate="visible"
        initial="hidden"
        className="md:w-8/12 md:flex justify-center items-center md:mt-0 mt-5 mx-auto relative z-10"
      >
        <div className="w-full text-start space-y-6 md:mt-0 mt-20">
          {/* Greeting with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
            <span className="text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Hi there!
            </span>
          </motion.div>
          
          {/* Welcome Text with Stagger Animation */}
          <motion.p 
            className="md:text-4xl text-2xl uppercase font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {split.map((item, index) => {
              return (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.8 + (index * 0.05),
                    duration: 0.5
                  }}
                  className="inline-block hover:scale-110 transition-transform duration-200"
                >
                  {item}
                </motion.span>
              );
            })}
          </motion.p>
          
          {/* Typing Animation with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
              <TypeAnimation
                sequence={[
                  "REACT DEVELOPER", 
                  2000, 
                  "MERN STACK DEVELOPER", 
                  2000,
                  "FULL STACK DEVELOPER",
                  2000,
                  "UI/UX ENTHUSIAST",
                  2000
                ]}
                speed={50}
                style={{ 
                  fontSize: "1.5em",
                  background: "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold"
                }}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Social Links with Enhanced Hover Effects */}
          <motion.div 
            className="flex gap-6 h-10 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { icon: BsGithub, link: "https://github.com/junnunprodhan", color: "from-gray-400 to-gray-600" },
              { icon: BsLinkedin, link: "https://www.linkedin.com/in/md-junnun-prodhan/", color: "from-blue-400 to-blue-600" },
              { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100010419976460", color: "from-blue-500 to-blue-700" }
            ].map((social, index) => (
              <Link key={index} to={social.link}>
                <motion.div
                  className={`relative group cursor-pointer`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${social.color} rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>
                  <div className="relative bg-black/80 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <social.icon size={24} className="text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Enhanced Download Button */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.div
              className="relative group inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              
              {/* Button */}
              <a 
                href="https://drive.google.com/file/d/10gEWgUfJ0bNY-aCN3q9tLLjhprcNj54E/view?usp=sharing" 
                download
                className="relative flex items-center gap-3 bg-black px-8 py-4 rounded-lg border border-purple-500/50 text-white font-bold text-lg transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/25"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaDownload className="text-purple-400" />
                </motion.div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Download Resume
                </span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </motion.div>
          </motion.div>
            <TypeAnimation
              sequence={["REACT DEVELOPER", 1000, "MERN STACK DEVELOPER", 1000]}
              speed={40}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </p>

          <div className=" flex gap-4 h-10 items-center ">
            <Link to={"https://github.com/junnunprodhan"}>
              {" "}
              <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <BsGithub className="" size={30} />
              </p>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/md-junnun-prodhan/"}
            >
              <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <BsLinkedin className="" size={30} />
              </p>
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100010419976460"}
            >
              <p className="hover:bg-red-600 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <FaFacebook className="" size={30} />
              </p>
            </Link>
          </div>
          <div className="mt-4 md:space-x-8 space-x-2 flex items-center ">
            {/* <button
              data-aos="fade-right"
              className=" bg-red-600 md:px-6 px-2 py-2   border-[#00FFFF] hover:bg-white hover:text-black rounded-[3px] drop-shadow-lg"
            >
              <p className="flex gap-2 items-center">
                <FaDownload />
                Download Resume
              </p>
            </button> */}
            
            <button className="text-xl box-border border-2 border-red-700 w-52 h-10 hover:bg-red-400 bg-red-600 text-white relative group">
  <a href="https://drive.google.com/file/d/10gEWgUfJ0bNY-aCN3q9tLLjhprcNj54E/view?usp=sharing" download>
    <span className="pr-8">Download Resume</span>
  </a>
  {/* <span className="bg-red-400 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-8 duration-300">
    <FaDownload />
  </span> */}
</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;


// // <button className="text-xl box-border border-2 border-red-700 w-52 h-10 bg-red-600 text-white relative group">
//               {/* <span className="pr-8">Download Resume</span> */}
//               <Link
//                to={"https://www.facebook.com/profile.php?id=100010419976460"}
//               >
//               <span className="pr-8">Download Resume</span>
//         </Link>
//               <span className="bg-red-400 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-8 duration-300">
//                 <FaDownload />
//               </span>
//             </button>