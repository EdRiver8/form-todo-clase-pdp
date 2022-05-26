import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";

function Form({ valor, funcion, tareas, setTodos, edit, setEdit }) {
  //e tambien se podria destructurar {target} y target tambien {value} ({{value}})
  const handleInputChange = (e) => {
    //e:{target:{value:value, name:name}}
    //funcion(e.target.['value']);
    //otra manera
    funcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //no se realiza el evento por defecto que hace el form 'get'
    //console.log("Todo Saved!");
    if (edit) {
      //se esta editando
      updateTodo(edit.id, valor, edit.completed); //se envia el 'valor' nuevo
    } else {
      // se esta guardando
      //se construye un nuevo todo con tres atributos
      const newTodo = { id: uuid4(), title: valor, completed: false };
      setTodos([...tareas, newTodo]); //spread y rest de js
      funcion(""); //limpia el state(valor) del input
    }
  };

  //los todos estan conformados por id, title y completed
  const updateTodo = (id, title, completed) => {
    const newTodos = tareas.map((todo) =>
      todo.id == id ? { id, title, completed } : todo
    );
    setTodos(newTodos);
    setEdit(null); //sino se cambia, siempre se va a quedar en editar
  };

  useEffect(() => {
    if (edit) {
      funcion(edit.title);
    } else {
      funcion("");
    }
  }, [edit, funcion]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter to todo"
        className="task-input"
        value={valor}
        onChange={handleInputChange}
      />
      <button type="submit" className="button-add">
        {edit ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default Form;
