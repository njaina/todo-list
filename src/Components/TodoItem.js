const TodoItem = ({ todo, handleCheck, index }) => {
  return (
    <div className="response">
      <div className="element" key={todo}>
        {todo}
      </div>
      <div className="check">
        <input type="checkbox" onClick={() => handleCheck(index)} />
      </div>
    </div>  
    
  )};
  export default TodoItem;