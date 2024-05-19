

import { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import MainForm from "../../component/Form/MainForm";
import Input from "../../component/Form/Input";
import { baseApiAxios } from "../../api/baseApiAxios";
import { setUser } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Event handler for checkbox change
  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (authData) => {
      return await baseApiAxios.post("/login", authData);
    },
  });
  const onSubmit= async (data) => {
    console.log('onSubmt data',data)
    try {
      const response = await mutateAsync(data);
      if (response?.data?.success) {
        localStorage.setItem("token", response?.data?.token);
        navigate("/dashboard");
        toast.success("Log in successfully", { position: "top-center" });
        dispatch(setUser(data));
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F6F9] dark:bg-black dark:text-black  ">
      <motion.div className=" p-8 rounded-lg shadow-lg max-w-md w-full bg-[#FFFFFF] dark:bg-black "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pb-5 flex mx-auto">
        <FontAwesomeIcon icon={faUserShield} className="text-3xl text-center text-indigo-600 mr-2" />
          <motion.h1
            className="text-2xl text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Admin Login
          </motion.h1>
        </div>
        <MainForm onSubmit={onSubmit}>
          <div className="space-y-3">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              label="Email"
            />
            <div>
              <Input
                name="password"
                placeholder="Password"
                type={`${showPassword ? "text" : "password"}`}
                label="Password"
              />
              <div className="pt-2 flex items-center gap-2 cursor-pointer w-max">
                <input
                  checked={showPassword}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4"
                />
                <p
                  className="dark:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  Show password
                </p>
              </div>
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
          >
            {isPending && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Log In
          </motion.button>
        </MainForm>
        {/* <p className="dark:text-white mt-2">
          Dont Have an Account?{" "}
          <Link to={"/register"}>
            <span className="text-blue-800">Please Register</span>
          </Link>
        </p> */}
      </motion.div>
    </div>
  );
};

export default Login;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';
// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit =async (data) => {
//     try {
//       const response = await mutateAsync(data);
//       if (response?.data?.success) {
//         localStorage.setItem("token", response?.data?.token);
//         navigate("/dashboard");
//         toast.success("Log in successfully", { position: "top-center" });
//         dispatch(setUser(data));
//       }
//     } catch (error) {
//       toast.error("Something went wrong", { position: "top-center" });
//     }
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
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
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
//             <label className="block text-gray-700">Password</label>
//             <input
//               {...register('password', { required: 'Password is required' })}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               type="text"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
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

// export default Login;
