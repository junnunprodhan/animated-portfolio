import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="hidden md:block">
      <div className=" bg-blue-gray-800 p-10  flex flex-col gap-3 h-screen  ">
        <NavLink
          to={"/dashboard/projects"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          Dashboard
        </NavLink>

        <NavLink
          to={"projects"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          All Projects
        </NavLink>
        <NavLink
          to={"create-project"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          Create Project
        </NavLink>
        <NavLink
          to={"blogs"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          All Blogs
        </NavLink>
        <NavLink
          to={"create-blog"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          Create Blog
        </NavLink>
        <NavLink
          to={"skills"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          All Skills
        </NavLink>
        <NavLink
          to={"create-skill"}
          className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
          style={({ isActive }) => {
            return {
              background: isActive ? "white" : "",
              color: isActive ? "black" : "",
            };
          }}
        >
          Create Skill
        </NavLink>
      
        <Link
          to={"/"}
          className="font-normal  hover:bg-white text-white hover:text-black px-5 py-2 "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
