import React, { useEffect, useRef, useState } from "react";
import ProjectCart from "../../component/ProjectCart/ProjectCart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../component/shered/SectionTitle/SectionTitle";
import project from "../../../public/project.json";
import { useAnimation } from "framer-motion";

const Project = () => {
  const Dynamic = project.filter((cart) => cart.option == "Dynamic");
  const Portfolio = project.filter((cart) => cart.option == "Portfolio");
  const ECommerce = project.filter((cart) => cart.option == "E-commerce");
  const Event = project.filter((cart) => cart.option == "Event");
  const Tool = project.filter((cart) => cart.option == "Tool");
  const Recent = project.slice(0,6)

  
  return (
    <section>
      <SectionTitle titleF={"My"} titleS={"Project"} />
      <div className="">
        <Tabs>
          <TabList className={"flex justify-center items-center"}>
            <Tab>Recent</Tab>
            <Tab>All</Tab>
            <Tab>E-commerce</Tab>
            <Tab>Event-management</Tab>
            <Tab>Portfolio</Tab>
            <Tab>Tool</Tab>
          </TabList>

          <TabPanel>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 ml-5">
              {Recent.map((cart) => (
                <ProjectCart cart={cart} key={cart._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 ml-5">
              {project.map((cart) => (
                <ProjectCart cart={cart} key={cart._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 ml-5">
              {ECommerce.map((cart) => (
                <ProjectCart cart={cart} key={cart._id} />
              ))}
            </div>
          </TabPanel>
         
          <TabPanel>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 ml-5">
              {Event.map((cart) => (
                <ProjectCart cart={cart} key={cart._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 ml-5">
              {Portfolio.map((cart) => (
                <ProjectCart cart={cart} key={cart._id} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 ml-5">
              {Tool.map((cart) => (
                <ProjectCart cart={cart} key={cart._id} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};
export default Project;
