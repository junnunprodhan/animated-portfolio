import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";


const useGetProjects = () =>{
   const response = useQuery({
    queryKey: ["Projects"],
    queryFn: () => baseApiAxios("/projects"),
  });
  return response
}


export default useGetProjects;