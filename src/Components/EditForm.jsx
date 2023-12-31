import { useState, useSyncExternalStore, React } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const EditForm = ({ task, onUpdate, IsEditing, onClose }) => {
  if (!IsEditing) return null;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [editTask, setEditTask] = useState({ ...task });

  const submitHandler = () => {
    onUpdate(editTask);
    toast.warn(`Task updated successfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    onClose();
    // setIsEditing(false);
  };

  return (
    <>
      <div className=" ease-in-out duration-600 bg-[rgba(0,0,0,0.5)] fixed  h-full w-full flex  items- justify-evenly">
        <form className=" bg-yellow-200 m-2  px-8 py-6 rounded-2xl  flex fixed top-[35%] left-[35%]  flex-col max-w-[800px] border-4 border-yellow-300  shadow-2xl shadow-yellow-700/40 hover:shadow-yellow-400/50 transition-all ease-in-out duration-300">
          <div className="flex flex-col">
            <input
              type="text"
              name="title"
              placeholder="Update title"
              required
              autoFocus
              maxLength={30}
              {...register("title", {
                required: "Title has not been updated",
              })}
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
              className=" text-black bg-slate-100 border-stone-500/40 border-2 rounded-lg m-2 px-5 py-2 "
            />
            <input
              type="text"
              name="title"
              placeholder="Update Description  "
              maxLength={60}
              {...register("desc", {
                required: "Description has not been updated",
              })}
              value={editTask.desc}
              onChange={(e) =>
                setEditTask({ ...editTask, desc: e.target.value })
              }
              className=" text-black bg-slate-100 border-stone-500/40 border-2 rounded-lg m-2 px-5 py-2 "
            />
            {errors?.title ? (
              <small className="text-yellow-600 pt-2  text-xl font-bold text-center  ">
                {errors.title.message}
              </small>
            ) : null}

            {!errors?.title && errors?.desc ? (
              <small className="text-yellow-600 text-xl font-bold text-center  ">
                {errors.desc.message}
              </small>
            ) : null}
            <div className="flex">
              <button
                className="bg-green-300 border-green-500/40  shadow-md shadow-green-700/60 transition ease-in-out duration-300 hover:shadow-green-300/60 border-2 mb-2 mt-4 mx-12 px-2 py-2 rounded-md flex justify-center items-center"
                onClick={handleSubmit(submitHandler)}
              >
                <CheckIcon
                  className="mr-2"
                  height={24}
                  width={24}
                  strokeWidth={2}
                />
                Update
              </button>
              <button
                className="bg-red-300  border-red-500/40 shadow-md shadow-red-700/60 transition ease-in-out duration-300 hover:shadow-red-300/60 border-2 mb-2 mt-4 mx-12 px-2 py-2 rounded-md flex justify-center items-center"
                onClick={onClose}
              >
                <XMarkIcon
                  className="mr-2"
                  height={24}
                  width={24}
                  strokeWidth={2}
                />
                Leave
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditForm;
