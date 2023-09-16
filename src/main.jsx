import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { Routes } from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-slate-800 md:w-full md:max-w-[1160px] md:mx-auto md:px-4 px-2'>
      <Toaster/>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  </React.StrictMode>,
)
