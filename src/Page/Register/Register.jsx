// import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";
// import MainForm from "../../component/Form/MainForm";
// import Input from "../../component/Form/Input";
// import { baseApiAxios } from "../../api/baseApiAxios";
import { motion } from 'framer-motion';

const Register = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  // // Event handler for checkbox change
  // const handleCheckboxChange = (event) => {
  //   setShowPassword(event.target.checked);
  // };
  // const { mutateAsync } = useMutation({
  //   mutationFn: async (newPost) => {
  //     return await baseApiAxios.post("/register", newPost);
  //   },
  // });

  // const onSubmit= async (
  //   data
  // ) => {
  //   const response = await mutateAsync(data);
  //   if (response?.data?.success) {
  //     navigate("/login");
  //     toast.success("Registration successfully please log in", {
  //       position: "top-center",
  //     });
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <motion.h1
        className="text-9xl font-bold text-red-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 0.5,
        }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        This is not for you,This just for Admin.
      </motion.p>
      <motion.a
        href="/"
        className="mt-6 text-xl text-blue-500 hover:underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go back to Home
      </motion.a>
    </div>
    // <div className="flex justify-center items-center h-screen bg-[#F5F6F9] dark:bg-black  ">
    //   <div className=" border px-10 py-20  w-[90%] md:w-1/3 mx-auto rounded-lg shadow-lg shadow-blue-gray-50 bg-[#FFFFFF] dark:bg-black">
    //     <div className="pb-5">
    //       <h1 className="text-lg dark:text-white">Register</h1>
    //       <p className="text-gray-400 pt-3">
    //         Please Register with your user name, email and password
    //       </p>
    //     </div>
    //     <MainForm onSubmit={onSubmit}>
    //       <div className="space-y-3">
    //         <Input
    //           name="name"
    //           placeholder="user Name"
    //           type="text"
    //           label="User Name"
    //         />
    //         <Input
    //           name="email"
    //           placeholder="Email"
    //           type="email"
    //           label="Email"
    //         />
    //         <div>
    //           <Input
    //             name="password"
    //             placeholder="Password"
    //             type={`${showPassword ? "text" : "password"}`}
    //             label="Password"
    //           />
    //           <div className="pt-2 flex items-center gap-2 cursor-pointer w-max">
    //             <input
    //               checked={showPassword}
    //               onChange={handleCheckboxChange}
    //               type="checkbox"
    //               name=""
    //               id=""
    //               className="w-4 h-4"
    //             />
    //             <p onClick={() => setShowPassword(!showPassword)}>
    //               Show password
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full"
    //       >
    //         Register
    //       </button>
    //     </MainForm>
    //     <p className="mt-2 ">
    //       Already Have an Account?{" "}
    //       <Link to={"/login"}>
    //         <span className="text-blue-800">Please Login</span>
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
};

export default Register;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';

// const Register = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission (e.g., send data to an API)
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <motion.div
//         className="bg-white p-8 rounded shadow-md w-full max-w-md"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input
//               {...register('name', { required: 'Name is required' })}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               type="text"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                   message: 'Invalid email address'
//                 }
//               })}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               type="email"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
//           <div>
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               {...register('message', { required: 'Message is required' })}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             ></textarea>
//             {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
//           </div>
//           <motion.button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;