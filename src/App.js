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
  const load = () =>{
    setInterval(()=>{
      console.log(min+" : "+s + " : "+ms);
        setMs((ms) => ms+10);
        if(ms>=1000)
        {
          setS((s) => s+1);
          setMs(0);
        }
        if(s>=60)
        {
          setMin((min) => min+1);
          setS(0);
        }
    },10)
  }
  return (
    <div className="App" style={{  }}>
      <h1>Number of grids to play with</h1>
      {/* <div>{counter[0]+" : "+counter[1] + " : "+counter[2]}</div> */}
      {/* <div>{min+" : "+s + " : "+ms}</div> */}
      
      {!input? 
      <div>
      <input name="tiles" type="radio" value="12" onChange={e=>setInput(e.target.value)}/>12
      <input name="tiles" type="radio" value="24" onChange={e=>setInput(e.target.value)}/>24
      </div>
      :<div>
      <h1>Return to main page</h1>
        <button onClick={()=>setInput(0)}><h1> back </h1></button>
      <h1><button onClick={()=>{setStart(true);load()}}>Start</button></h1>
      </div>
      }

      
      
      
      {input ? <CardComponent tiles={input}/>:null}
      <TimerComponent start={start}/> 
    </div>
  );
}
