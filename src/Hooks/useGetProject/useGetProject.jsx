
import axios from 'axios';
const useGetProject = async () => {
  const res = await axios.get('https://portfolio-server-297y.onrender.com/portfolioProject')
  return res.data;
};

export default useGetProject;
