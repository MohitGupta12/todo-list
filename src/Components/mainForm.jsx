import { useState, useSyncExternalStore, React } from "react";
import { useForm } from "react-hook-form";

import { v4 as uuid } from "uuid";

import {
  CheckBadgeIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import EditForm from "./EditForm";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [task, setTask] = useState({ title: "", desc: "", uid: uuid() });
  const [editedTask, setEditedTask] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [completeTaskList, setCompleteTaskList] = useState([]);

  const submitHandler = (e) => {
    // const id = uuid();
    // console.log(id);
    // setTask({ ...task, uid: id });
    // console.log(task);
    addTask(task);

    setTask({ title: "", desc: "", uid: "" });
  };

  const deleteHandler = (id, List) => {
    if (List === taskList) {
      setTaskList((prevTaskList) => prevTaskList.filter((t) => t.uid !== id));
    } else if (List === completeTaskList) {
      setCompleteTaskList((prevCompleteTaskList) =>
        prevCompleteTaskList.filter((t) => t.uid !== id)
      );
    }
  };

  const completeHandler = (id, taskList) => {
    // remove elem with that id from taskList
    const completeTask = taskList.filter((t) => t.uid === id);
    deleteHandler(id, taskList);
    // add that elem to completeTaskList
    setCompleteTaskList((prevCompleteTaskList) => [
      ...prevCompleteTaskList,
      completeTask[0],
    ]);
  };

  const addTask = (task) => {
    setTaskList((prevTaskList) => [...prevTaskList, { ...task, uid: uuid() }]);
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  // const onUpdate = (editTask) => {
  //   setTaskList((prevTaskList) => {
  //     prevTaskList.map((t) => {
  //       if (t.uid === editTask.uid) return { ...editTask };
  //       else t;
  //     });
  //   });
  // };
  const onUpdate = (editTask) => {
    // setTaskList((prevTaskList) => {
    //   prevTaskList.map((task) => {
    //     if (task.uid === editTask.uid) {
    //       return { ...editTask };
    //     }
    //     return task;
    //   });
    // });
    const index = taskList.findIndex((task) => task.uid === editTask.uid);

    console.log("editTask.uid:", editTask.uid);

    // Print all task.uid values in taskList for debugging
    console.log(
      "taskList:",
      taskList.map((task) => task)
    );

    console.log("index:", index);

    if (index !== -1) {
      // Create a new array with the updated task
      const updatedTaskList = [...taskList];
      console.log(updatedTaskList);
      updatedTaskList[index] = editTask;
      setTaskList([...updatedTaskList]);
    }
    // setIsEditing(false);
  };

  const renderTaskList = (taskList, onDelete, onComplete, enterEditMode) => {
    if (taskList && taskList.length > 0) {
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
                  <button
                    className="bg-yellow-300  cursor-pointer rounded-lg  h-10 w-10 p-2 mx-2 border-2 border-yellow-400  "
                    onClick={() => enterEditMode(task)}
                  >
                    <PencilIcon height={22} width={22} />
                  </button>
                  <button
                    className="bg-green-300 h-10 w-10 p-2 mx-2 border-2 cursor-pointer rounded-lg border-green-400 "
                    onClick={() => onComplete(task.uid, taskList)}
                  >
                    <CheckBadgeIcon height={22} width={22} />
                  </button>
                  <button
                    className="bg-red-300  h-10 w-10 p-2 mx-2 border-2 border-red-400 cursor-pointer rounded-lg"
                    onClick={() => onDelete(task.uid, taskList)}
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

  const renderCompleteTaskList = (completeTaskList, onDelete) => {
    if (completeTaskList.length > 0) {
      return (
        <ul>
          {completeTaskList.map((compTask) => {
            return (
              <li
                className=" bg-green-300 border-2 border-green-400 h-20 my-2.5 mx-4 rounded-lg py-1 px-2 flex justify-between"
                key={compTask.uid}
              >
                <div>
                  <div className=" m-1 text-xl font-bold  text-[hsl(0,100%,12%)] ">
                    {compTask.title}
                  </div>
                  <div className=" m-1 text-l font-semibold  text-[hsl(0,100%,12%)]">
                    {compTask.desc}
                  </div>
                </div>
                <div className=" flex justify-center items-center ">
                  <button
                    className="bg-red-300  h-10 w-10 p-2 mx-2 border-2 border-red-400 "
                    onClick={() => onDelete(compTask.uid, completeTaskList)}
                  >
                    <TrashIcon height={22} width={22} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <h1 className="text-zinc-500 p-4  text-2xl font-bold text-start">
          No task Completed...{" "}
        </h1>
      );
    }
  };

  return (
    <>
      {" "}
      <h1 className="bg-zinc-800  text-white w-screen p-4 text-4xl font-bold text-center">
        ToDo List
      </h1>
      <EditForm
        onUpdate={onUpdate}
        task={editedTask}
        IsEditing={isEditing}
        onClose={() => setIsEditing(false)}
      />
      <form className=" m-2 flex items-center justify-center  flex-col   ">
        <div className="flex flex-row">
          <input
            type="text"
            name="title"
            placeholder="Enter title here ... "
            required
            autoFocus
            maxLength={30}
            {...register("title", {
              required: "Title cannot be empty",
            })}
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className=" text-black bg-slate-100 border-slate-900 border-2 rounded-lg m-2 px-5 py-2 "
          />
          <input
            type="text"
            name="title"
            placeholder="Enter Description here ... "
            maxLength={60}
            {...register("desc", {
              required: "Description cannot be empty",
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
          {renderTaskList(
            taskList,
            deleteHandler,
            completeHandler,
            enterEditMode
          )}
        </div>

        <div className="bg-slate-200 border-2 border-slate-400 rounded-xl h-fit w-1/3 py-2 px-1">
          <h1 className="text-zinc-500 p-4  text-2xl font-bold text-start">
            Completed List
          </h1>
          {renderCompleteTaskList(completeTaskList, deleteHandler)}
        </div>
      </div>
    </>
  );
};

export default MainForm;
