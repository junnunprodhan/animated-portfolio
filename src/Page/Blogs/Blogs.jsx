import React from 'react';

import Blog from '../../component/Blog/Blog';
import useGetBlogs from '../../utils/useGetBlogs';

const Blogs = () => {
    const { data, isPending } = useGetBlogs();
  const blog= data?.data?.data
    return (
        <div className='my-10'>
            <div className='text-center'>
            <h1 className='text-5xl'>Recent Blogs</h1>
            <div className='mx-auto w-[50%] '><p className='my-5 text-center'>Stay updated with my latest programming insights and tutorials. Dive into a wealth of knowledge, from tech trends to coding challenges.</p></div>
            </div>
        <div className='grid md:grid-cols-3 gap-5 mx-auto grid-cols-1 text-center"'>
            {blog?.map((item) => (
                <Blog item={item} key={item.num} />
              ))}
        </div>
        </div>
    );
};

export default Blogs;