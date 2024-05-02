import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layouts/Main';

import About from '../Page/About/About';
import Project from '../Page/Project/Project';
import AddCard from '../Page/AddCard/AddCard';
import Contact from '../Page/Contact/Contact';
import HHome from '../HHome';
import Blogs from '../Page/Blogs/Blogs';

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HHome/>
            },
            {
               path: '/about',
               element: <About/>
            },
            {
                path:'/project',
                element: <Project/>
            },
            {
                path:'/blogs',
                element: <Blogs/>
            },
            {
               path: '/contact',
               element: <Contact/>
            },
            {
                path: '/myprojectadd/cart',
                element: <AddCard/>
            }
        ]
    }
])