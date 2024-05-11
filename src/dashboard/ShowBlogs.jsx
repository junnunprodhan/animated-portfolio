import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import Swal from "sweetalert2";
import EditBlog from "./EditBlog";
const ShowBlogs = ({
  blog,
  index,
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      return await baseApiAxios.delete(`/delete-blog/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Blogs"] });
    },
  });
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(!openModal);
  };


  const handleDeleteBlog= async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await mutateAsync(id);
        if (response?.data?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  // const handleDeleteSupply = async (id: string) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       const response = await mutateAsync(id);
  //       if (response?.data?.success) {
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Your file has been deleted.",
  //           icon: "success",
  //         });
  //       }
  //     }
  //   });
  // };
 
  return (
    <tr key={blog?._id} className="even:bg-blue-gray-50/50">
      <td className="pl-2">{index + 1}</td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  text-black"
        >
          <img src={blog?.img} alt="" className="w-[100px] h-[100px] rounded-lg" />
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  text-black"
        >
          {blog?.title}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  text-black"
        >
          {blog?.category}
        </Typography>
      </td>
      
      <td className="p-8 flex items-center  gap-3">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <button
            onClick={() => setModalOpen(!openModal)}
            className="bg-blue-600 text-white p-2 font-semibold rounded"
          >
            <FiEdit className="h-6 w-6" />
          </button>
        </Typography>
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <button
            onClick={() => handleDeleteBlog(blog?._id)}
            className="bg-red-600 text-white p-2 font-semibold rounded"
          >
            <MdDelete className="h-6 w-6" />
          </button>
        </Typography>
      </td>
      <td>
        {openModal && (
          <EditBlog
            closeModal={closeModal}
            openModal={openModal}
            blog={blog}

          />
        )}
      </td>
    </tr>
  );
};

export default ShowBlogs;
