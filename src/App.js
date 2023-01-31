import { useState } from "react";
import "./App.css"

function App() {
  const [value,setValue]=useState("");
  const [InputValues, setInputValues] = useState([]);
  const [done, setDone] = useState([]);
  
  

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputValues([...InputValues,value]);
      setValue('');
    }
  };
  
  const handleCheck = (index) => {
    const doneItem = InputValues[index];
    const newTodos = InputValues.filter((_, i) => i !== index);
    setDone([...done, doneItem]);
    setInputValues(newTodos);
  };
  
  return (
    <div className="main"> 
    <div className="container">
    <div className="todo">
      <div className="title">Todo</div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="New to do"
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div>
      
        {InputValues.map((todo, index) => (
          <div className="response" >
            <div className="element" key={todo} >{todo}</div>
            <div className="check">
            <input  type="checkbox" onClick={() => handleCheck(index)} /></div>
            </div>
            ))}
        </div>
      </div>
    </div>
    </div>
     
    <div className="container">
    <div className="done">
    <div className="title" >Done</div>
    <div>
      {done.map((todo) => (
        
        <div className="response">
          <div className="done-elt"  key={todo}>{todo}</div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;