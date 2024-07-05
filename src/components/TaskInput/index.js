import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { addTodo, editTodo } from "../../actions";
const TaskInput = ({ eid, setId, initialtext }) => {
  const [userinput, setInput] = useState(initialtext || "");

  const dispatch = useDispatch();

  useEffect(()=>{
    setInput(initialtext || '');
  },[initialtext]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userinput.trim()) {
      if (eid) {
        dispatch(editTodo(eid, userinput));
        
        setId(null);
      } else {
        dispatch(addTodo(userinput));
      }
    }

    setInput("");
  };
  return (
    <div className="form-container">
      <div className="head-card">
        <h1 className="main-heading">Add Your Task</h1>
      </div>
      <form className="form-group" onSubmit={handleSubmit}>

        <input
          type="text"
          className="custom"
          value={userinput}
          placeholder="Enter Your Task.."
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <div className="buttons">
        <button type="submit" className="add-btn">
          +Add
        </button>
        {eid?<button type="submit" className="edit-btn">UPDATE</button>:""}
        </div>
      </form>
    </div>
  );
};
export default TaskInput;
