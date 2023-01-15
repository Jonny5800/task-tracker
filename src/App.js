import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go Gym",
      day: "Every day 5.30am",
      reminder: false,
    },
    {
      id: 2,
      text: "Send phone for repair",
      day: "Feb 1st at 11:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Snowboarding",
      day: "Feb 4th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    //console.log(task + "sf;gonbsf;lgn");
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
    console.log(id, " deletin em");
  };

  //Toggle the reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks
      )
    );
  };

  //My wrong version
  // const toggleReminder = (id) => {
  //     setTasks(tasks.map((tasks) => {tasks.id === id ? [...!tasks.reminder] : "";
  //       })
  //     );

  return (
    <div className="container">
      <Header
        showFormPropToPass={showForm}
        title={"Task Tracker"}
        addOn={() => {
          setShowForm(!showForm);
        }}
      />
      {showForm && <AddTask addOn={addTask} />}
      {/* ^^//if showForm is true, then show. But if false, do nothing*/}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleTask={toggleReminder}
        />
      ) : (
        <h2>There are no tasks here</h2>
      )}
    </div>
  );
}
//<Tasks tasks={tasks} onDelete={deleteTask} />
export default App;

//export default App;
