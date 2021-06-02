
import React from 'react';

const AddTask = ({ addTask, value, setValue }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask()
  }

  return (
    <form  className="add-task" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Ajouter une tache"
        onChange={(event) => {
          setValue(event.target.value)
        }}
      >
      </input>
    </form>
  );
};

export default AddTask;