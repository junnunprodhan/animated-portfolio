import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";

export const useGetSingleProject = (id) => {
  const response = useQuery({
    queryKey: ["Project"],
    queryFn: () => baseApiAxios(`/projects/${id}`),
  });
  return response?.data?.data?.data;
};
