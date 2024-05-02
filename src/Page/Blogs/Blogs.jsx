import React from 'react';
import blog from '../../../public/blog.json'
import Blog from '../../component/Blog/Blog';

const Blogs = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
            <h1 className='text-5xl'>Recent Blogs</h1>
            <p className='my-5'>Stay updated with my latest programming insights and tutorials. Dive into a wealth of knowledge, from tech trends to coding challenges.</p>
            </div>
        <div className='grid md:grid-cols-3 gap-5 mx-auto grid-cols-2 text-center"'>
            {blog.map((item) => (
                <Blog item={item} key={item.num} />
              ))}
        </div>
        </div>
    );
};

export default Blogs;