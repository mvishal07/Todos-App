import { useState } from "react";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import main_img from "./main_img.jpg"
import './index.css'
const Home = () => {
  const [eid, setId] = useState(null);
  const [textEdit, setEdit] = useState("");
  return (
    <div className="home-container">
        
      <div className="left-container">
      <img src={main_img} alt="logo" className="main-img"/>
      </div>
      <div className="tasks-container">
      <TaskInput eid={eid} setId={setId} initialtext={textEdit} />
      <TaskList setId={setId} setEdit={setEdit} />
      </div>
    </div>
  );
};
export default Home;
