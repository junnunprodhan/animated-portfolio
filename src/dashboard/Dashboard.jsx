
import { useQuery } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import useGetProjects from "../utils/usegetProjects";

const Dashboard = () => {
  const { data, isPending } = useGetProjects();
  return (
    <div className=" pb-16">
      <h3>Welcome to Dashboard</h3>
    </div>
  );
};

export default Dashboard;
