
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiAxios } from "../api/baseApiAxios";
import singleImageUpload from "../utils/singleImageUpload";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import MainForm from "../component/Form/MainForm";
import Input from "../component/Form/Input";
import FileInput from "../component/Form/FileInput";


const EditSkill = ({ closeModal, openModal, skill }) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (payload) => {
      return await baseApiAxios.patch(`/skill/update/${skill?._id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Skill"] });
    },
  });

  const defaultValues = {
    name: skill?.name,
    img: skill?.img,
  };

  const onSubmit= async (data) => {
    console.log('data paici',data )
    try {
      setIsLoading(true);
      const imageUpload = await singleImageUpload(data.img[0]);
      const newSkill = {
        name: data?.name,
        img: imageUpload ? imageUpload : skill?.img,
      };
      const response = await mutateAsync(newSkill);
      if (response?.data?.success) {
        setIsLoading(false);
        closeModal();
        toast.success("Skill updated successfully!!!", {
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
              <Input label="Title" placeholder="Title" name="name" type="text" />
            <FileInput label="Image" name="img" />
            
          </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 text-white font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
              >
                {isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
                Update Skill
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

export default EditSkill;
