import React from "react";
import "./App.css"
import DoneList from "./Components/DoneList";
import TodoList from "./Components/TodoList";
function App() {
     const [value, setValue] = React.useState("");
     const [InputValues, setInputValues] = React.useState([]);
     const [done, setDone] = React.useState([]);
   
     const handleInputChange = (event) => {
       setValue(event.target.value);
     };
   
     const handleKeyPress = (event) => {
       if (event.key === "Enter") {
         setInputValues([...InputValues, value]);
         setValue("");
       }
     };
   
     const handleCheck = (index) => {
       const doneItem = InputValues[index];
       const newTodos = InputValues.filter((elt, i) => i !== index);
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
               
               <TodoList InputValues={InputValues} handleCheck={handleCheck} />
             </div>
           </div>
         </div>
   
         <div className="container">
           <div className="done">
             <div className="title">Done</div>
             <DoneList done={done} />
           </div>
        
   </div>
    </div>
  );
}

export default App;