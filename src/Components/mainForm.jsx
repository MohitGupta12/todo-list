import { React } from "react";
import { useForm } from "react-hook-form";
import { PlusIcon } from "@heroicons/react/24/solid";

const MainForm = ({ task, setTask, addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (e) => {
    addTask(task);
    setTask({ title: "", desc: "", uid: "" });
  };
  return (
    <>
      <form className=" m-2 flex items-center justify-center  flex-col   ">
        <div className="flex flex-row">
          <input
            type="text"
            name="title"
            placeholder="Enter title here ... "
            required
            autoFocus
            maxLength={15}
            {...register("title", {
              required: "Title cannot be empty",
            })}
            value={task.title}
            onChange={(e) => {
              const trimmedValue = e.target.value.replace(/^\s+/, "");
              setTask({
                ...task,
                title:
                  trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1),
              });
            }}
            className=" text-black bg-slate-100 border-slate-900 border-2 rounded-lg m-2 px-5 py-2 "
          />
          <input
            type="text"
            name="title"
            placeholder="Enter Description here ... "
            maxLength={30}
            {...register("desc", {
              required: "Description cannot be empty",
            })}
            value={task.desc}
            onChange={(e) => {
              const trimmedValue = e.target.value.replace(/^\s+/, "");
              setTask({
                ...task,
                desc:
                  trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1),
              });
            }}
            className=" text-black bg-slate-100 border-slate-900 border-2 rounded-lg m-2 px-5 py-2 "
          />
          <button
            className="bg-gray-900 m-2 px-2 py-2 rounded-md"
            onClick={handleSubmit(submitHandler)}
          >
            <PlusIcon height={24} width={24} />
          </button>
        </div>
        {errors?.title ? (
          <small className="text-red-500 pt-2 text-xl font-bold text-center">
            {errors.title.message}
          </small>
        ) : null}

        {!errors?.title && errors?.desc ? (
          <small className="text-red-500  text-xl font-bold text-center">
            {errors.desc.message}
          </small>
        ) : null}
      </form>
    </>
  );
};

export default MainForm;
