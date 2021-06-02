import React from 'react'

const TasksList = ({ taskData, setDone }) => (
  <div className="taskslist">

  {taskData.map((task) => {
      let cssClass = 'task'
      if (task.done === true) {
        cssClass += ' task--done';
      }

      return(
        <div key={task.id} className={cssClass}>
          <input onChange={(event) => {
            setDone(task.id, !task.done);
          }} type="checkbox" id={task.id} checked={task.done} ></input>
          <label htmlFor={task.id}>{task.label}</label>
        </div>
      )
    })

  }
   </div>
)
  

export default TasksList
