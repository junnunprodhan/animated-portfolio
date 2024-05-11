import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";


const useGetSkills = () =>{
   const response = useQuery({
    queryKey: ["Skills"],
    queryFn: () => baseApiAxios("/skills"),
  });
  return response
}


export default useGetSkills;