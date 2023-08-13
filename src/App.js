import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScree, setIsCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddNewToDo = () => {
    const newToDoObj = {
      title: newTodoTitle,
    };
    console.log(newToDoObj);
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newToDoObj);
    // console.log (updatedTodoArr);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setNewTodoTitle("");
  };
  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodos) {
      setAllTodos(savedTodos);
    }
  }, []);

const handleDeleteTodo=(index)=>{
const deleteTodo = [...allTodos]
deleteTodo.splice(index, 1);
localStorage.setItem("todolist", JSON.stringify(deleteTodo))
setAllTodos(deleteTodo)
}
  
  return (
    <div className="todo-wrapper">
      <h1> Todos </h1>
      <div className="todo-input">
        <div className="todo-input-item">
          <label>Title</label>
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="what's the tast"
          ></input>
        </div>
        {/* <div className="todo-input-item">
          <label>Catagory</label>
          <input type="text" placeholder="Whats the tast"></input>
        </div> */}
        <div className="todo-input-item">
          <button
            type="button"
            onClick={handleAddNewToDo}
            className="primary-btn"
          >
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
        {allTodos.map((item, index) => (
          <div className="todo-list-item" key={index}>
            <div>
              <h3>{item.title}</h3>

            </div>
            <div>
              <AiOutlineDelete  className="icon" onClick={()=>handleDeleteTodo(index)}/>
              <BsCheckLg className=" check-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
