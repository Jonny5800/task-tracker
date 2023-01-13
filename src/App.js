import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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

  //Events go in the App
  //DELETE task
  // Needs a specific ID so it knows which to delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
    //console.log(id, " deletin em");
  };

  return (
    <div className="container">
      <Header title={"Header from App.js"} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

//export default App;
