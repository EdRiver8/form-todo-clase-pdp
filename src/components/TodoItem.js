import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, deleteTodo, completed, setEdit }) => {
  console.log(todo);
  const handlerDelete = () => {
    deleteTodo(todo);
  };

  return (
    <li className="list">
      <div className={`list-item ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </div>
      <div>
        <button className="button-complete" onClick={() => completed(todo)}>
          <FaCheckCircle />
        </button>
        <button className="button-edit" onClick={() => setEdit(todo)}>
          <FaEdit />
        </button>
        <button className="button-delete" onClick={handlerDelete}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
