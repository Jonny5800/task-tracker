import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  const addTask = (task) => {
    console.log(task);
  };
  //Events go in the App
  //DELETE task
  // Needs a specific ID so it knows which to delete
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
      <Header title={"Header from App.js"} />
      <AddTask addOn={addTask} />
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
