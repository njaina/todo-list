export const Todo = ({ todo, index, markTodo }) => {
    return (
      <div className="todo">
        <input
          type="checkbox"
          id={index}
          onClick={() => markTodo(index)}
        />
        <label htmlFor={index} />
        <span>{todo.text}</span>
      </div>
    );
  }