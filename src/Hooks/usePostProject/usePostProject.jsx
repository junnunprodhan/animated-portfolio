import axios from 'axios';

const usePostProject = async(project) => {
   const res = await axios.post('http://localhost:5000/addProject',project)
   console.log(res)
};

export default usePostProject;