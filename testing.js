import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  // hook your code up here ;)
  const[allTasks, setAllTasks] = useState([]);
  const[newTask, setNewTask] = useState({});

  const handleChange = ({target}) => {
    const {name, value} = target;
    setState((prevState) => ({
      ...prevState,
      newTask: {
        ...prevState.newTask,
        [name]: value,
        id: Date.now()
      }
    }));
  }
    const  handleSubmit= (event) => {
    event.preventDefault();
    if (!state.newTask.title) return;
    setState((prevState) => ({
      allTasks: [prevState.newTask, ...prevState.allTasks],
      newTask: {}
    }));
  }
  


  render() {
    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={this.state.newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TasksList
          allTasks={this.state.allTasks}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}