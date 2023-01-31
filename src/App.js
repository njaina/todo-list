import { useState } from "react";
import "./App.css"
import Box from "./Component/Box";
import { Title } from "./Component/Title";

function App() {
  const [value,setValue]=useState("");
  const [InputValues, setInputValues] = useState([]);
  const [isChecked,setIsChecked]= useState(false);
  
  

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputValues([...InputValues,value]);
      setValue('');
    }
  };
  const handleChecked = ()=>{
      if(!isChecked) setIsChecked(true);
      
      setIsChecked(false)
  }
  console.log(isChecked);

  return (
    <>
    <div className="main">
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
      
          {value===""?
          (InputValues.map
            ((Element,key) =>
              (
                <div className="response" >
                { !isChecked ? <div className="element" key={key} >{Element}</div> : <div></div> }
                {isChecked===false? <input
                className="check"
                type="checkbox"
                onClick={()=>handleChecked()}
                ></input> : <div></div> }
                </div>
              ))
          )
          :<div></div>}

        </div>
      </div>
    </div>
    <div className="done">
    <div className="title" >Done</div>
    <div>
    {InputValues.map((Element,k) => (
            <>
            { isChecked  ? <div className="element" key={k} >{Element}</div> : <div></div> }
            </>
          ))}
    </div>
    </div>
    </div>
    
    </>
  );
}

export default App;