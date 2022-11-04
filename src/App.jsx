import TaskList from "./Tasklist";
import Taskform from "./Taskform";
import { useState, useEffect } from "react";
import { data } from "./tasks";

function HolaMundo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description:'new'
    }]);
  }
  

  return (
    <div>
      <Taskform createTask={createTask}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default HolaMundo;
