
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



const CreateBlog = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newBlog) => {
      return await baseApiAxios.post("/blog", newBlog);
    },
  });
  const onSubmit = async (data) => {
    console.log("data:",data)
    try {
      // const imageUpload = await singleImageUpload(data?.image![0]);
      const imageUpload = await singleImageUpload(data && data.img && data.img[0]);
      const newBlog = {
        title: data?.title,
        category: data?.category,
        description: data?.description,
        img: imageUpload,
      };
      console.log('new:',newBlog)
      const response = await mutateAsync(newBlog);
      if (response?.data?.success) {
        toast.success("Blog added successfully!!!", {
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
      <h1 className="text-3xl font-semibold text-center text-black pb-8">Create Blog</h1>
        <MainForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <Input label="Title" placeholder="Title" name="title" type="text" />
            <FileInput label="Image" name="img" />
            <Dropdown
              label="Category"
              name="category"
              items={["recent", "Technology"]}
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
            Create Blog
          </button>
        </MainForm>

    </div>
  );
};

export default CreateBlog;