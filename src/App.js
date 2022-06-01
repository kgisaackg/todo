import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Project Presentation',
      day: 'May 30 at 3:00pm',
      reminder: true
  },{
      id: 2, 
      text: 'Host the application 2',
      day: 'May 30 at 3:00pm 2',
      reminder: true
  },{
      id: 3, 
      text: 'Workout',
      day: 'May 30 at 3:00pm 3',
      reminder: false
  }]
  );
  
  const name = 'Isaac'
  const x = true;

  const  deleteTask = (id) => {
    console.log("Task Id is ", id);
  }

  return (
    <div className="App">
      <Header/>
      <Task tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
