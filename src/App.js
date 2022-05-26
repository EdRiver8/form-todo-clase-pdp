import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from "react";
import TodoList from "./components/TodoList";

//npm install react-icons --save

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); //arreglo de varias tareas
  const [edit, setEdit] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            valor={input}
            funcion={setInput}
            tareas={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
};

export default App;
