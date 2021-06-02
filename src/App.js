import React from 'react'
import AddTask from './components/AddTask/AddTask'
import NbTasks from './components/NbTasks/NbTasks'
import TasksList from './components/TasksList/TasksList'

import dataTask from './data/data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: dataTask,
      inputTaskLabel: '',
    }

    this.setDoneDataTask = this.setDoneDataTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.setInputTaskLabel = this.setInputTaskLabel.bind(this)
  }

  addTask() {
    const { inputTaskLabel, data } = this.state;

    const tabId = data.map((task) => 
      task.id
    )
    console.log(tabId);

    const nextId = Math.max(...tabId) + 1;

    const newTask = {
      id:nextId,
      label: inputTaskLabel,
      done: false
    }

    const newArray = [...dataTask];
    
    newArray.push(newTask);
   
    this.setState({ 
      data: newArray
    })

    this.setInputTaskLabel('')
  }

  setInputTaskLabel(newValue) {
    this.setState({
      inputTaskLabel: newValue
    })
  }

  setDoneDataTask(taskId, newDone) {
    console.log(this.state.data[taskId - 1]);
    console.log(taskId, newDone);

  }

  render() {
    const { data, inputTaskLabel } = this.state

    const taskNotDone = data.filter((task) => task.done === false);
    const nbTasksNotDone = taskNotDone.length;

    return (
      <div className="app">
        <AddTask
          addTask={this.addTask}
          value={inputTaskLabel}
          setValue={this.setInputTaskLabel}
        />

       <NbTasks
        count={nbTasksNotDone}
       />

        <TasksList
          taskData={data}
          setDone={this.setDoneDataTask}
        />

     </div>
    )
  }
}

export default App
