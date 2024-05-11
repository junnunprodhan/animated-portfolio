import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import Swal from "sweetalert2";
import EditProject from "./EditProject";
const ShowProjects = ({
  project,
  index,
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      return await baseApiAxios.delete(`/delete-project/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
    },
  });
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(!openModal);
  };


  const handleDeleteProject = async (id) => {
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
    <tr key={project?._id} className="even:bg-blue-gray-50/50">
      <td className="pl-2">{index + 1}</td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  text-black"
        >
          <img src={project?.img} alt="" className="w-[100px] h-[100px] rounded-lg" />
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  text-black"
        >
          {project?.name}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          placeholder={""}
          variant="small"
          color="blue-gray"
          className="font-normal  text-black"
        >
          {project?.option}
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
            onClick={() => handleDeleteProject(project?._id)}
            className="bg-red-600 text-white p-2 font-semibold rounded"
          >
            <MdDelete className="h-6 w-6" />
          </button>
        </Typography>
      </td>
      <td>
        {openModal && (
          <EditProject
            closeModal={closeModal}
            openModal={openModal}
            project={project}

          />
        )}
      </td>
    </tr>
  );
};

export default ShowProjects;
