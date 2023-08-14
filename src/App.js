import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodo, setNewTodo] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Work");

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodos) {
      setAllTodos(savedTodos);
    }
  }, []);

  const handleAddNewToDo = () => {
    const newToDoObj = {
      title: newTodoTitle,
      status: newTodo.status,
      category: selectedCategory,
    };
    const updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newToDoObj);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setNewTodoTitle("");
    setNewTodo({
      title: "",
      status: "Not Started",
    });
  };

  const handleDeleteTodo = (index) => {
    const deleteTodo = [...allTodos];
    deleteTodo.splice(index, 1);
    setAllTodos(deleteTodo);
    localStorage.setItem("todolist", JSON.stringify(deleteTodo));
  };

  const handleStatusChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...allTodos];
    updatedTodos[index].status = "Completed";
    setAllTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };

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
            placeholder="Enter task title"
          />
        </div>
        <select
          name="status"
          value={newTodo.status}
          onChange={handleStatusChange}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Grocery">Grocery</option>
          <option value="School">School</option>
          <option value="Workout">Workout</option>
        </select>
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
        <h1 className="active">Task</h1>
      </div>
      <div className="todo-list">
        {allTodos.map((item, index) => (
          <div className="todo-list-item" key={index}>
            <div>
              <h3>{item.title}</h3>
              <span>Status: {item.status}</span>
              <p>Category: {item.category}</p>
            </div>
            <div>
              <AiOutlineDelete
                className="icon"
                onClick={() => handleDeleteTodo(index)}
              />
              {item.status !== "Completed" && (
                <BsCheckLg
                  className="check-icon"
                  onClick={() => handleCompleteTodo(index)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
