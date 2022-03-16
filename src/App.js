import { useState } from "react";
import "./styles.css";

let todos = [];
const ToDoElement = ({ value, idx, onCompleteToDo, removeToDoList }) => {
  console.log("value: ", value);
  return (
    <li
      style={{
        textAlign: "Left",
        margin: 15,
        backgroundColor: value.isCompleted ? "#5ae31982" : "#e3251982"
      }}
    >
      {value.todo}
      <button onClick={() => onCompleteToDo(idx)}>
        {value.isCompleted ? "complete task" : "task isCompleted"}
      </button>
      <button onClick={() => removeToDoList(idx)}>remove to do List</button>
    </li>
  );
};

export default function App() {
  //for input
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });
  //for managing todo list
  const [todos, updateToDoList] = useState([]);
  //3 tasks
  //add todo
  addToDo = () => {
    if (inputValue.todo) {
      updateToDoList([...todos, inputValue]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
    console.log("our todos: ", todos);
  };
  //complete todo

  onCompleteToDo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];

    //change obj property isCompleted
    const updatedItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    //put updated item into todo lost
    mTodos[idx] = updatedItem;
    updateToDoList(mTodos);
  };

  //remove todo
  removeToDoList = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    //update todo list
    updateToDoList(mTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Simple TO-DO List</h1>
      <input
        className="inputField"
        type="text"
        value={inputValue.todo}
        placeholder="add to do list"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addToDo}>add TO DO</button>
      <ul>
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteToDo={onCompleteToDo}
                removeToDoList={removeToDoList}
              />
            );
          })}
      </ul>
    </div>
  );
}
