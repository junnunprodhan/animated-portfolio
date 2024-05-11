

import { Card, Typography } from "@material-tailwind/react";
import useGetProjects from "../utils/usegetProjects";
import ShowProjects from "./ShowProjects";

const TABLE_HEAD = ["##", "Image", "Name", "Category", "Actions"];

const AllProjectsDash = () => {
  const { data, isPending } = useGetProjects();
  const projects= data?.data?.data
  if (isPending) {
    return (
      <p className="flex items-center justify-center text-xl font-semibold h-screen ">
        Loading...
      </p>
    );
  }
  if (!data?.data?.data?.length) {
    return (
      <p className="flex items-center justify-center text-xl font-semibold h-screen ">
        No Projects
      </p>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-black text-center pb-8">All Projects</h1>
        <Card placeholder={""} className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-black leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <ShowProjects key={project?._id} project={project} index={index} />
              ))}
            </tbody>
          </table>
        </Card>

    </div>
  );
};

export default AllProjectsDash;
