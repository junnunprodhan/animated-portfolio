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
import DashboardLayout from '../Layouts/DashboardLayout';
import AllProjectsDash from '../dashboard/AllProjectsDash';
import CreateProject from '../dashboard/CreateProject';
import CreateBlog from '../dashboard/CreateBlog';
import AllBlogsDash from '../dashboard/AllBlogsDash';
import AllSkillsDash from '../dashboard/AllSkillsDash';
import CreateSkill from '../dashboard/CreateSkill';
import BlogDetails from '../component/Blog/BlogDetails';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import PrivateRoute from '../Layouts/PrivateRoute';

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
              path: '/blogs/:id',
              element: <BlogDetails/>,
              loader: ({params}) => fetch(`https://portfolio-server-phi-flame.vercel.app/api/v1/blogs/${params.id}`)
          },
            {
               path: '/contact',
               element: <Contact/>
            },
            {
                path: '/myprojectadd/cart',
                element: <AddCard/>
            },
            {
              path: "/login",
              element: <Login/>,
            },
            {
              path: "/register",
              element: <Register />,
            },
        ]
    },
    {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element:<AllProjectsDash />,
          },
          {
            path: "projects",
            element: <AllProjectsDash />,
          },
          {
            path: "create-project",
            element: <CreateProject />,
          },
          {
            path: "blogs",
            element: <AllBlogsDash/>,
          },
          {
            path: "create-blog",
            element: <CreateBlog />,
          },
          {
            path: "skills",
            element: <AllSkillsDash/>,
          },
          {
            path: "create-skill",
            element: <CreateSkill />,
          },
        ],
      },
])