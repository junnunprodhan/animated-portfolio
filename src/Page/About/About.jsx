import React from 'react';
import AboutAuthor from '../../component/AboutAuthor/AboutAuthor';
import Skill from '../../component/Skill/Skill';
import SectionTitle from '../../component/shered/SectionTitle/SectionTitle';
import MyResume from '../../component/MyResume/MyResume';
import Project from '../Project/Project';

const About = () => {
    return (
        <section className=' mt-20'>
            <SectionTitle titleF={'About'} titleS={' me'} />
            <div>
                <p className=' text-xl text-white md:px-48'>I'm a versatile web developer skilled in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Firebase, Vercel, Netlify, and GitHub. From designing beautiful user interfaces to building robust back-end systems and deploying high-performance applications, I'm passionate about creating user-centric web solutions and staying up-to-date with emerging technologies. Let's turn your web ideas into reality!</p>
            </div>
            <div>
                <div> <AboutAuthor /></div>
                <div className='mt-20'> <Skill /></div>
                <div className=' text-start mt-20'>
                    <SectionTitle titleF={'My'} titleS={'Resume'}/>
                    <MyResume />
                </div>
            </div>
        </section>
    );
};

export default About;