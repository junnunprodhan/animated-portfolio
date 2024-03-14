import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./component/ThemContex/ThemContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=' bg-black md:w-full md:max-w-[1260px] md:mx-auto mx-auto min-w-[320px] max-w-[490px] border-2xl text-white font-Poppins font-sans'>
      <Toaster />
      <ThemeProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
