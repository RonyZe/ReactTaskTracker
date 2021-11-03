import React from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
import { AddTask } from "./components/AddTask";

//Function level component
function App() {
  //const name = 'Brad'
  //const x = true

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Web Developer",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "React Developer",
      day: "Monday",
      reminder: true,
    },
    {
      id: 3,
      text: "Asp Developer",
      day: "Monday",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1;

    //console.log(id)
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    //console.log(id)

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      {/*
      <h1>Hello from React </h1>
      <h2>Hello {x ? 'Yes': 'No'}</h2> 
      */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

//Class Level component
/*
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/

export default App;
