import "./styles.css";

import { useEffect, useState, useMemo } from "react";
import TimerComponent from './TimerComponent';
import CardComponent from "./CardComponent";

export default function App() {
  const [input , setInput] = useState(0);
  const[min,setMin] = useState(0);
  const[s,setS] = useState(0);
  const[ms,setMs] = useState(0);
  const [start,setStart] = useState(false);
  return (
    <div className="App">
      <div className="first-div"><h1>Hogwarts Memory Game</h1></div>
      <div className="second-div"><h2>Get on board!</h2></div>
      <div className="third-div">
        {/* <button>Let's begin</button> */}
          <img src="https://m.media-amazon.com/images/I/41K1kDMDHcL._AC_SX425_.jpg"/>
      </div>
      {!input? 
      <div>
         <h1>Number of grids to play with</h1>
      <input name="tiles" type="radio" value="12" onChange={e=>setInput(e.target.value)}/>12
      <input name="tiles" type="radio" value="24" onChange={e=>setInput(e.target.value)}/>24
      </div>
      :<div>
      <h1>Return to main page</h1>
        <button onClick={()=>setInput(0)}><h1> back </h1></button>
      <h1><button onClick={()=>{setStart(true);}}>Start</button></h1>
      </div>
      }

      
      
      
      {input && start ? <CardComponent tiles={input} start={start}/>:null}
      {/* <TimerComponent start={start}/>  */}
    </div>
  );
}
