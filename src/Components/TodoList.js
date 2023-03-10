import TodoItem from "./TodoItem";

const TodoList = ({ InputValues, handleCheck }) => {
  return (
    <div>
      {InputValues.map((todo, index) => (
        <TodoItem
          key={todo}
          todo={todo}
          handleCheck={handleCheck}
          index={index}
        />
      ))}
    </div>
    )
};
export default TodoList;