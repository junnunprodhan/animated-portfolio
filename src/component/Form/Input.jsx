import { useFormContext } from "react-hook-form";

const Input = ({ type, name, placeholder, label,  }) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <h1 className="text-black">{label}:</h1>
      <input
        className="w-full mt-1 dark:bg-black border-2 border-gray-300 px-3 py-2 rounded-md focus:ring-2 ring-gray-300 outline-none  text-black"
        type={type}
        id={name}
        {...register(name, { required: true })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
