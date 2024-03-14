import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyProductPlace = () => {
    return (
        <div className='flex space-x-5'>
            <Link className=' hover:text-orange-200' to={'https://github.com/junnunprodhan'}><FaGithub size={30}/></Link>
            <Link className=' hover:text-orange-200' to={'https://www.facebook.com/profile.php?id=100010419976460'}><FaFacebook size={30}/></Link>
            
        </div>
    );
};

export default MyProductPlace;