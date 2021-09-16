import { useEffect, useState, useMemo } from "react";
import TimerComponent from './TimerComponent';
import CardComponent from "./CardComponent";
const Main = ({visible}) =>
{
    const [input , setInput] = useState(0);
    const[min,setMin] = useState(0);
    const[s,setS] = useState(0);
    const[ms,setMs] = useState(0);
    const [start,setStart] = useState(false);
    return(
        <div >
            <h1 onClick={()=>visible(false)}>HOME</h1>
          


        {start ?
        <div>
        <h1>Return to main page</h1>
          <button onClick={()=>{setInput(0);setStart(false);}}><h1> back </h1></button>
          {input && start ? <CardComponent tiles={input} start={start}/>:null}
        </div>:!input? 
        <div>
           <h1>Number of grids to play with</h1>
        <input name="tiles" type="radio" value="12" onChange={e=>setInput(e.target.value)}/>12
        <input name="tiles" type="radio" value="24" onChange={e=>setInput(e.target.value)}/>24
        </div>
        :<h1><button onClick={()=>{setStart(true);}}>Start</button></h1>}
        {/* } */}
  
        
        
        
       
        {/* <TimerComponent start={start}/>  */}
        </div>
    )
}
export default Main;