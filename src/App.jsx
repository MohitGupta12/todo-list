import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";

import { v4 as uuid } from "uuid";

import {
  CheckBadgeIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [task, setTask] = useState({ title: "", desc: "", uid: uuid() });
  const [taskList, setTaskList] = useState([]);
  const [completeTaskList, setCompleteTaskList] = useState([]);

  const submitHandler = () => {
    addTask(task);
    setTask({ title: "", desc: "", uid: uuid() });
  };

  const deleteHandler = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((t) => t.uid !== id));
  };

  const addTask = (task) => {
    setTaskList((prevTaskList) => [...prevTaskList, task]);
  };

  const renderTaskList = (taskList, deleteTask) => {
    if (taskList.length > 0) {
      {
        return (
          <ul>
            {taskList.map((task) => (
              <li
                className=" bg-neutral-300 border-2 border-neutral-400 h-20 my-2.5 mx-4 rounded-lg py-1 
                px-2 flex justify-between"
                key={task.uid}
              >
                <div>
                  <div className=" m-1 text-xl font-bold  text-[hsl(0,100%,12%)] ">
                    {task.title}
                  </div>
                  <div className=" m-1 text-l font-semibold  text-[hsl(0,100%,12%)]">
                    {task.desc}
                  </div>
                </div>
                <div className=" flex justify-center items-center ">
                  <button className="bg-yellow-300  cursor-pointer rounded-lg  h-10 w-10 p-2 mx-2 border-2 border-yellow-400  ">
                    <PencilIcon height={22} width={22} />
                  </button>
                  <button className="bg-green-300 h-10 w-10 p-2 mx-2 border-2 cursor-pointer rounded-lg border-green-400 ">
                    <CheckBadgeIcon height={22} width={22} />
                  </button>
                  <button
                    onClick={() => deleteTask(task.uid)}
                    className="bg-red-300  h-10 w-10 p-2 mx-2 border-2 border-red-400 cursor-pointer rounded-lg"
                  >
                    <TrashIcon height={22} width={22} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        );
      }
    } else {
      return (
        <h1 className="text-zinc-500 p-4  text-2xl font-bold text-start">
          No task added...{" "}
        </h1>
      );
    }
  };

  const renderCompleteTaskList = () => {};

  return (
    <>
      <h1 className="bg-zinc-800  text-white w-screen p-4 text-4xl font-bold text-center">
        ToDo List
      </h1>

      <form className=" m-2 flex items-center justify-center  flex-col   ">
        <div className="flex flex-row">
          <input
            type="text"
            name="title"
            placeholder="Enter title here ... "
            required
            autoFocus
            {...register("title", {
              required: "Title cannot be empty",
              maxLength: "it cannot this long",
            })}
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className=" text-black bg-slate-100 border-slate-900 border-2 rounded-lg m-2 px-5 py-2 "
          />
          <input
            type="text"
            name="title"
            placeholder="Enter Description here ... "
            {...register("desc", {
              required: "Description cannot be empty",
              maxLength: "it cannot this long",
            })}
            value={task.desc}
            onChange={(e) => setTask({ ...task, desc: e.target.value })}
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
          <small className="text-red-500 pt-2  text-xl font-bold text-center">
            {errors.title.message}
          </small>
        ) : null}

        {!errors?.title && errors?.desc ? (
          <small className="text-red-500  text-xl font-bold text-center">
            {errors.desc.message}
          </small>
        ) : null}
      </form>

      <div className="  h-[calc(100vh-15rem)]  flex flex-row justify-evenly items-start pt-2">
        <div className="bg-slate-200 border-2 border-slate-400 rounded-xl h-fit w-1/3 py-2 px-1 ">
          <h1 className="text-zinc-500 p-4  text-3xl font-extrabold text-start">
            Task List
          </h1>
          {renderTaskList(taskList, deleteHandler)}
        </div>

        <div className="bg-slate-200 border-2 border-slate-400 rounded-xl h-fit w-1/3 py-2 px-1">
          <h1 className="text-zinc-500 p-4  text-2xl font-bold text-start">
            Completed List
          </h1>
          {/* <div className=" bg-green-300 border-2 border-green-400 h-20 my-2.5 mx-4 rounded-lg py-1 px-2 flex justify-between">
            <div>
              <div className=" m-1 text-xl font-bold  text-[hsl(0,100%,12%)] ">
                Title
              </div>
              <div className=" m-1 text-l font-semibold  text-[hsl(0,100%,12%)]">
                Description
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <button className="bg-red-300  h-10 w-10 p-2 mx-2 border-2 border-red-400 ">
                <TrashIcon height={22} width={22} />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
