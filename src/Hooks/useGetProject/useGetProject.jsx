import axios from 'axios';
import React from 'react';

const useGetProject = async() => {
   const res = await axios.get('http://localhost:5000/project')
   return res.data;
};

export default useGetProject;