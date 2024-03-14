import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyProductPlace = () => {
    return (
        <div className='flex space-x-5'>
            <Link className=' hover:text-orange-200' to={'https://github.com/dashboard'}><FaGithub size={30}/></Link>
            <Link className=' hover:text-orange-200' to={'https://web.facebook.com/profile.php?id=100077015388756'}><FaFacebook size={30}/></Link>
            
        </div>
    );
};

export default MyProductPlace;