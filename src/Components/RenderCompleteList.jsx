import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
const renderCompleteList = (completeTaskList, onDelete) => {
  if (completeTaskList.length > 0) {
    const reversedCompleteTaskList = [...completeTaskList].reverse();

    return (
      <ul>
        {reversedCompleteTaskList.map((compTask) => {
          return (
            <li
              className=" bg-green-300 border-2 border-green-400 h-20 my-2.5 mx-4 rounded-lg py-1 px-2 flex justify-between shadow-xl shadow-green-700/60 transition ease-in-out duration-300 hover:shadow-green-600/60"
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
                  className="bg-red-500   border-red-700/40 shadow-md shadow-red-700/60 transition ease-in-out duration-300 hover:shadow-red-300/60  h-10 w-10 p-2 mx-2 border-2 cursor-pointer rounded-lg"
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

export default renderCompleteList;
