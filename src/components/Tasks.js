const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        <h3>{tasks}</h3>
      ))}
    </>
  );
};

export default Tasks;
