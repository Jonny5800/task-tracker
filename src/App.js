import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <Header title={"Header from App.js"} />
      <Tasks />
    </div>
  );
}

export default App;

//export default App;
