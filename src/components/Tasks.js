import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          passToggle={toggleTask}
        />
      ))}
    </>
  );
};

export default Tasks;
//
//<h3 key={task.id} task={Task} />

//deleteTask - onDelete
