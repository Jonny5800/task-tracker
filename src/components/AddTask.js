import { useState } from "react";

const AddTask = ({ addOn }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text} //What does this do value={text}
          placeholder="Add Task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          value={day}
          placeholder="Add Day & Time"
          onChange={(e) => {
            setDay(e.target.value);
          }} //missing value={day} from input
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          placeholder="Add Task"
          onChange={(e) => {
            setReminder(e.currentTarget.checked); //How could I know currentTarget.checked otherwise?
          }}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
