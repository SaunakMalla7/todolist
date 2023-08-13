import { useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScree, setIsCompleteScreen] = useState(false);
  return (
    <div className="todo-wrapper">
      <h1> Todos </h1>
      <div className="todo-input">
        <div className="todo-input-item">
          <label>Title</label>
          <input type="text" placeholder="what's the tast"></input>
        </div>
        <div className="todo-input-item">
          <label>Catagory</label>
          <input type="text" placeholder="Whats the tast"></input>
        </div>
        <div className="todo-input-item">
          <button type="button" className="primary-btn">
            Add
          </button>
        </div>
      </div>
      <div className="btn-area">
        <button
          className={`isCompleteScreen ${
            isCompleteScree === false && "active"
          }`}
          onClick={() => setIsCompleteScreen(false)}
        >
          Todo
        </button>
        <button
          className={`isCompleteScreen ${isCompleteScree === true && "active"}`}
          onClick={() => setIsCompleteScreen(true)}
        >
          Completed
        </button>
      </div>
      <div className="todo-list">
        <div className="todo-list-item">
          <h1>task 1</h1>
          <div>
            <AiOutlineDelete className="icon" />
          </div>
          <BsCheckLg className=" check-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
