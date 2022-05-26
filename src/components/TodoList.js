import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const deleteTodo = (todo) => {
    props.setTodos(props.todos.filter((item) => item.id !== todo.id)); //setTodos llega por props y se modifca desde aca
  };

  const completed = (todo) => {
    const newTodos = props.todos.map((item) => {
      // if (item.id === todo.id) {
      //   const newTodo = { ...item, completed: !completed };
      //   return newTodo;
      // } else {
      //   return item;
      // }
      return item.id === todo.id
        ? { ...item, completed: !item.completed }
        : item;
    });
    props.setTodos(newTodos); //actualizacion de la lista con la propiedad completed modificada
  };

  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            completed={completed}
            setEdit={props.setEdit}
          />
        ); //todo.id es una de las propiedades del todo que se tienen en el form
      })}
    </div>
  );
};

export default TodoList;
