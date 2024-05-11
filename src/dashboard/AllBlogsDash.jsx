

import { Card, Typography } from "@material-tailwind/react";
import useGetBlogs from "../utils/useGetBlogs";
import ShowBlogs from "./ShowBlogs";

const TABLE_HEAD = ["##", "Image", "Title", "Category", "Actions"];

const AllBlogsDash = () => {
  const { data, isPending } = useGetBlogs();
  const blogs= data?.data?.data
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
        No Blog
      </p>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-black text-center pb-8">All Blogs</h1>
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
              {blogs.map((blog, index) => (
                <ShowBlogs key={blog?._id} blog={blog} index={index} />
              ))}
            </tbody>
          </table>
        </Card>

    </div>
  );
};

export default AllBlogsDash;
