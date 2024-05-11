import { useFormContext } from "react-hook-form";
const FileInput = ({ name, label }) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <h1 className="text-black">{label}:</h1>
      <input
        type="file"
        id=""
        className="w-full mt-1 text-black    rounded-md focus:ring-2 border-2 border-gray-300 ring-gray-300 outline-none file:py-2 file:border-none file:bg-gray-600 file:w-32 file:text-white"
        {...register(name, { required: false })}
      />
    </div>
  );
};

export default FileInput;
