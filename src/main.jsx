import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "./component/ThemContex/ThemContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
     className=' bg-black md:w-full md:max-w-[1260px] md:mx-auto mx-auto min-w-[320px] max-w-[490px] border-2xl text-white font-Poppins font-sans'>
      <Toaster />
      <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </ThemeProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
