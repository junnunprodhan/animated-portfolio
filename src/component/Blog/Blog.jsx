import React from 'react';
import { Link } from 'react-router-dom';


const Blog = ({item}) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full h-auto bg-cover" src={item.image} alt="Blog Image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item?.title}</div>
  </div>
  <div className="bg-gray-200 px-6 py-4">
    <Link to={item?.link}  target="_blank">
    <button className="bg-blue-500 hover:bg-blue-700 text-white bottom-0 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Read More</button></Link>
  </div>
</div>
    );
};

export default Blog;