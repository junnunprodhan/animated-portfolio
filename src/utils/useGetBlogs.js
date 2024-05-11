import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";


const useGetBlogs = () =>{
   const response = useQuery({
    queryKey: ["Blogs"],
    queryFn: () => baseApiAxios("/blogs"),
  });
  return response
}


export default useGetBlogs;