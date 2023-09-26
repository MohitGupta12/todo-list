import React from "react";
import {
  CheckBadgeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const renderTaskList = (taskList, onDelete, onComplete, enterEditMode) => {
  if (taskList && taskList.length > 0) {
    {
      return (
        <ul>
          {taskList.map((task) => (
            <li
              className=" bg-neutral-300 border-2 border-neutral-400 h-20 my-2.5 mx-4 rounded-lg py-1 px-2 flex justify-between shadow-xl shadow-neutral-700/60 transition ease-in-out duration-300 hover:shadow-neutral-500/60"
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
                  className="bg-yellow-300  cursor-pointer rounded-lg  h-10 w-10 p-2 mx-2   shadow-md shadow-yellow-500/60 transition ease-in-out duration-300 hover:shadow-yellow-300/60 border-yellow-400 border-2  "
                  onClick={() => enterEditMode(task)}
                >
                  <PencilIcon height={22} width={22} />
                </button>
                <button
                  className="bg-green-300   shadow-md shadow-green-500/60 transition ease-in-out duration-300 hover:shadow-green-300/60 h-10 w-10 p-2 mx-2 border-2 cursor-pointer rounded-lg border-green-400 "
                  onClick={() => onComplete(task.uid, taskList)}
                >
                  <CheckBadgeIcon height={22} width={22} />
                </button>
                <button
                  className="bg-red-300  h-10 w-10 p-2 mx-2 border-2  border-red-400 shadow-md shadow-red-500/60 transition ease-in-out duration-300 hover:shadow-red-300/60 cursor-pointer rounded-lg"
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

export default renderTaskList;
