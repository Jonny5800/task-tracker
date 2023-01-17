import { useState } from "react";

const AddTask = ({ addOn, showFormPropToPass }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault(); //stops it from submitting to a page
    if (!text) {
      return alert("Please enter text");
    }

    //if there is text then pass that state into addOn
    addOn({ text, day, reminder });
    //Then clear the form for the next cycle
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onFormSubmit}>
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
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }} //missing value={day} from input
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          placeholder="Add Task"
          onChange={(e) => {
            setReminder(e.currentTarget.checked); //How could I know currentTarget.checked otherwise?
          }}
        />
      </div>
      <input
        className="btn btn-block"
        type="submit"
        value="Save Task"
        // onClick={(e) => {
        //   e.preventDefault();
        //   console.log("save button pressed");
        // }}
      />
    </form>
  );
};

export default AddTask;
