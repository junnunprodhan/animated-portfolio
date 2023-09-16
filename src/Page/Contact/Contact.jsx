import React from 'react';
import SectionTitle from '../../component/shered/SectionTitle/SectionTitle';
import ContactInfo from '../../component/ContactInfo/ContactInfo';
import ContactForm from '../../component/ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className='mt-20'>
            <SectionTitle titleF={'contact'} titleS={'me'}/>
            <div className='md:flex md:gap-10'>
                <div className=' md:w-6/12'>
                   <ContactInfo/>
                </div>
                <div className=' md:w-6/12'>
                  <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default Contact;