import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

import MainForm from "./Components/mainForm";
import EditForm from "./Components/EditForm";
import useLocalStorage from "./Hooks/useLocalStorage";
import Lists from "./Components/List";
import showToast from "./Components/showToast.jsx";

function App() {
  const capacity = 5;
  const [task, setTask] = useState({ title: "", desc: "", uid: uuid() });
  const [editedTask, setEditedTask] = useState(null);
  const [taskList, setTaskList] = useLocalStorage("react.todo.list", []);
  const [isEditing, setIsEditing] = useState(false);
  const [completeTaskList, setCompleteTaskList] = useLocalStorage(
    "react.todo.complete.list",
    []
  );

  const deleteHandler = (id, List) => {
    if (List === taskList) {
      setTaskList((prevTaskList) => prevTaskList.filter((t) => t.uid !== id));
      showToast("Task removed from task list", "error");
    } else if (List === completeTaskList) {
      setCompleteTaskList((prevCompleteTaskList) =>
        prevCompleteTaskList.filter((t) => t.uid !== id)
      );
      showToast("Task removed from Completed list", "error");
    }
  };

  const completeHandler = (id, taskList) => {
    const completeTask = taskList.filter((t) => t.uid === id);
    deleteHandler(id, taskList);
    setTimeout(() => {
      if (completeTaskList.length < capacity) {
        setCompleteTaskList((prevCompleteTaskList) => [
          ...prevCompleteTaskList,
          completeTask[0],
        ]);
        showToast("Task added to Completed List");
      } else {
        showToast("Task removed from Completed list", "error");
        setCompleteTaskList((prevCompleteTaskList) => {
          const [, ...remainingCompletedTasks] = prevCompleteTaskList;
          return [...remainingCompletedTasks, completeTask[0]];
        });
        setTimeout(() => {
          showToast("Task added to Completed List");
        }, 600);
      }
    }, 800);
  };

  const addTask = (task) => {
    if (taskList.length < capacity) {
      showToast("Task added successfully");
      setTaskList((prevTaskList) => [
        ...prevTaskList,
        { ...task, uid: uuid() },
      ]);
    } else {
      showToast("Task removed from Task list", "error");

      setTimeout(() => {
        showToast("Task added successfully");
        setTaskList((prevTaskList) => {
          let [, ...remainingTasks] = prevTaskList;
          return [...remainingTasks, { ...task, uid: uuid() }];
        });
      }, 800);
    }
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const onUpdate = (editTask) => {
    const index = taskList.findIndex((task) => task.uid === editTask.uid);
    if (index !== -1) {
      const updatedTaskList = [...taskList];
      updatedTaskList[index] = editTask;
      setTaskList([...updatedTaskList]);
    }
  };

  return (
    <>
      <h1 className="bg-zinc-800  text-white w-screen p-4 text-4xl font-extrabold text-center">
        ToDo List
      </h1>
      <EditForm
        onUpdate={onUpdate}
        task={editedTask}
        IsEditing={isEditing}
        onClose={() => setIsEditing(false)}
      />
      <MainForm task={task} setTask={setTask} addTask={addTask} />
      <Lists
        completeHandler={completeHandler}
        completeTaskList={completeTaskList}
        deleteHandler={deleteHandler}
        enterEditMode={enterEditMode}
        taskList={taskList}
      />
    </>
  );
}

export default App;
