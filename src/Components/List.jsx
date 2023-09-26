import renderCompleteList from "./RenderCompleteList";
import renderTaskList from "./RenderTaskList";

const Lists = ({
  completeTaskList,
  taskList,
  deleteHandler,
  completeHandler,
  enterEditMode,
}) => {
  return (
    <div className="  h-[calc(100vh-15rem)]  flex flex-row justify-evenly items-start pt-2">
      <div className="bg-slate-200 border-4 border-slate-400 rounded-xl h-fit w-1/3 py-2 px-1 shadow-2xl shadow-slate-500/60 ">
        <h1 className="text-zinc-700 p-4  text-2xl font-extrabold text-start">
          Task List
        </h1>
        {renderTaskList(
          taskList,
          deleteHandler,
          completeHandler,
          enterEditMode
        )}
      </div>

      <div className="bg-slate-200 border-4 border-slate-400 rounded-xl h-fit w-1/3 py-2 px-1  shadow-2xl shadow-slate-500/60 ">
        <h1 className="text-zinc-700 p-4  text-2xl font-extrabold text-start">
          Completed List
        </h1>
        {renderCompleteList(completeTaskList, deleteHandler)}
      </div>
    </div>
  );
};

export default Lists;
