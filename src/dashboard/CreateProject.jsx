
import singleImageUpload from "../utils/singleImageUpload";
import { baseApiAxios } from "../api/baseApiAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import MainForm from "../component/Form/MainForm";
import Input from "../component/Form/Input";
import FileInput from "../component/Form/FileInput";
import Dropdown from "../component/Form/Dropdown";
import TextArea from "../component/Form/TextArea";



const CreateProject = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newProject) => {
      return await baseApiAxios.post("/project", newProject);
    },
  });
  const onSubmit = async (data) => {
    console.log("data:",data)
    try {
      // const imageUpload = await singleImageUpload(data?.image![0]);
      const imageUpload = await singleImageUpload(data && data.img && data.img[0]);
      const newProject = {
        name: data?.name,
        option: data?.option,
        link:data?.link,
        codeLink:data?.codeLink,
        option2:[data?.option2],
        description: data?.description,
        img: imageUpload,
      };
      console.log('new:',newProject)
      const response = await mutateAsync(newProject);
      if (response?.data?.success) {
        toast.success("Project added successfully!!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
     className=" h-screen p-10">
      <h1 className="text-3xl font-semibold text-center text-black pb-8">Create Project</h1>
        <MainForm onSubmit={onSubmit}>
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
            className="bg-blue-700 hover:bg-blue-800 duration-500 px-5 py-2 font-semibold rounded-md mt-5 w-full flex items-center justify-center gap-5"
          >
            {isPending && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Create Project
          </button>
        </MainForm>

    </div>
  );
};

export default CreateProject;
