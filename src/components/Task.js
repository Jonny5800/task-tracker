import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, passToggle, addAlong }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""} `} //Y no comma b4 $
      onDoubleClick={() => {
        passToggle(task.id);
      }}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
