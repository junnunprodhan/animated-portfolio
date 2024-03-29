import React, { useEffect, useRef, useState } from "react";
import ProjectCart from "../../component/ProjectCart/ProjectCart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../component/shered/SectionTitle/SectionTitle";
import project from "../../../public/project.json";
import { useAnimation } from "framer-motion";

const Project = () => {
  const Dynamic = project.filter((cart) => cart.option == "Dynamic");
  const Static = project.filter((cart) => cart.option == "Static");
  const ECommerce = project.filter((cart) => cart.option == "E-commerce");
  const Event = project.filter((cart) => cart.option == "Event");

  
  return (
    <section>
      <SectionTitle titleF={"My"} titleS={"Project"} />
      <div className="">
        <Tabs>
          <TabList className={"flex justify-center items-center"}>
            <Tab>All</Tab>
            <Tab>E-commerce</Tab>
            <Tab>Event-management</Tab>
            <Tab>Static</Tab>
          </TabList>

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
              {Static.map((cart) => (
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
