import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import useGetProject from '../../Hooks/useGetProject/useGetProject';
import ProjectCart from '../../component/ProjectCart/ProjectCart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../component/shered/SectionTitle/SectionTitle';


const Project = () => {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        useGetProject()
            .then(data => setCarts(data))
    }, [])


    const Dynamic = carts.filter(cart => cart.option == 'Dynamic')
    const Static = carts.filter(cart => cart.option == 'Static')
    return (
        <section>
            <SectionTitle titleF={'My'} titleS={'Project'}/>
            <div className=''>


                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Dynamic</Tab>
                        <Tab>Static</Tab>
                    </TabList>

                    <TabPanel>
                        <div className=' grid md:grid-cols-3 grid-cols-1 gap-10'>
                            {
                                carts.map(cart => <ProjectCart cart={cart} key={cart._id} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid md:grid-cols-3 grid-cols-1 gap-10'>
                            {
                                Dynamic.map(cart => <ProjectCart cart={cart} key={cart._id} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid md:grid-cols-3 grid-cols-1 gap-10'>
                            {
                                Static.map(cart => <ProjectCart cart={cart} key={cart._id} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>

            </div>
        </section>
    );
};
export default Project;