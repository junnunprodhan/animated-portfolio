import React from 'react';
import RadialProgress from '../shered/RadialProgress/RadialProgress';
import SectionTitle from '../shered/SectionTitle/SectionTitle';
import Experince from '../Experience/Experince';
// text-[Radio Canada,sans-serif]
// skill data get 
import skill from '../../../public/skill.json'

const Skill = () => {
    return (
        <section className='mt-10 mx-auto'>
            <SectionTitle titleF={'My'} titleS={'Skill'} />
            <p className=' md:px-48 px-8 text-[Radio Canada,sans-serif] text-white text-xl'>"I'm a skilled developer proficient in front-end and back-end technologies, including HTML, CSS, JavaScript (ES6+), React, Node.js, and Express.js. I excel in full-stack development (MERN stack) and bring strong problem-solving abilities and a collaborative approach to every project, committed to delivering high-quality results."</p>
            <div className='mt-10'>

                <div className=' grid md:grid-cols-4 grid-cols-2 gap-4'>
                    <div>
                        <RadialProgress progress={90} persent={90} name={'Font-end Development'} />
                    </div>
                    <div>
                        <RadialProgress progress={80} persent={80} name={'Back-end Development'} />
                    </div>
                    <div>
                        <RadialProgress progress={75} persent={75} name={'Mern-Stack Development'} />
                    </div>
                    <div>
                        <RadialProgress progress={70} persent={70} name={'Full-Stack Development'} />
                    </div>
                </div>
                <div className='mt-20'>
                    <section>
                        <SectionTitle titleF={'Skill And'} titleS={'Technologies'} />
                        <div className=' grid md:grid-cols-5 gap-5 mx-auto grid-cols-2'>
                            {
                                skill.map(item => <Experince item={item} key={item.num} />)
                            }
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Skill;