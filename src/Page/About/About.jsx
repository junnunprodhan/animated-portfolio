import React from "react";
import AboutAuthor from "../../component/AboutAuthor/AboutAuthor";
import Skill from "../../component/Skill/Skill";
import SectionTitle from "../../component/shered/SectionTitle/SectionTitle";
import MyResume from "../../component/MyResume/MyResume";

const About = () => {
  return (
    <section className="">
      <SectionTitle titleF={"About"} titleS={" Myself"} />
      <div>
        <div className="px-2">
          {" "}
          <AboutAuthor />
        </div>
        <div className="mt-20">
          {" "}
          <Skill />
        </div>
        <div className=" text-start mt-20">
          <div data-aos="fade-down">
            <SectionTitle titleF={"My"} titleS={"Resume"} />
          </div>
          <MyResume />
        </div>
      </div>
    </section>
  );
};

export default About;
