
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import singleImageUpload from "../utils/singleImageUpload";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import MainForm from "../component/Form/MainForm";
import Input from "../component/Form/Input";
import FileInput from "../component/Form/FileInput";
import Dropdown from "../component/Form/Dropdown";
import TextArea from "../component/Form/TextArea";

const EditProject = ({ closeModal, openModal, project }) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (payload) => {
      return await baseApiAxios.patch(`/project/update/${project?._id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Project"] });
    },
  });

  const defaultValues = {
    name: project?.name,
    img: project?.img,
    option: project?.option,
    link: project?.link,
    codeLink: project?.codeLink,
    description: project?.description,
  };

  const onSubmit= async (data) => {
    try {
      setIsLoading(true);
      const imageUpload = await singleImageUpload(data.img[0]);
      const newSupply = {
        name: data?.name,
        link: data?.link,
        codeLink: data?.codeLink,
        option: data?.option,
        option2: [data?.option2],
        description: data?.description,
        img: imageUpload ? imageUpload : project?.img,
      };
      const response = await mutateAsync(newSupply);
      if (response?.data?.success) {
        setIsLoading(false);
        closeModal();
        toast.success("project updated successfully!!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="dark:text-black ">
      <div
        className={`fixed z-20 inset-0 overflow-y-auto ${
          openModal ? "visible" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 bg-black/60 bg-opacity-75 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white  w-full md:w-1/2 p-8 rounded-lg">
            <MainForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <Input label="Name" placeholder="Name" name="name" type="text" />
            <FileInput label="Image" name="img" />
            <Dropdown
              label="Option"
              name="option"
              items={["recent", "E-commerce", "Event","Tool"]}
            />
            <Input
              label="Link"
              placeholder="Live link"
              name="link"
              type="text"
            />
            <Input
              label="Code Link"
              placeholder="Code link"
              name="codeLink"
              type="text"
            />
            <Input
              label="Option2"
              placeholder="technology"
              name="option2"
              type="text"
            />
          </div>
          <div className="mt-5">
            <TextArea
              label="Description"
              name="description"
              placeholder="Description"
            />
          </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
              >
                {isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
                Update Project
              </button>
            </MainForm>

            <button
              onClick={closeModal}
              className="bg-red-700 hover:bg-red-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
