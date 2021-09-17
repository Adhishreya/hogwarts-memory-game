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
    const visibleFunction = () =>
    {
        if(input)
        {return (<button onClick={()=>{setStart(true);}}>Start</button>)}
        return null
    }
    return(
    <div className="play-main-home">
        <div className="home-icon" onClick={()=>visible(false)}>
        <div>HOME</div>
        <img src="https://m.media-amazon.com/images/I/71KVodZRuhL._SX425_.jpg"/>
        </div>

        {input && start ?

            <div className="game-begin">
            <div className="back-button"><button className="back" onClick={()=>{setInput(0);setStart(false);}}></button><span>Back</span></div>
            
            <CardComponent tiles={input} start={start}/>
            </div>
        :
        <div className="decide-play">
            <h1>Number of grids to play with</h1>
                <div className="wrapper">
                <input name="tiles" type="radio" value="12" id="option-1" onChange={e=>setInput(e.target.value)}/>
                <input name="tiles" type="radio" value="24" id="option-2" onChange={e=>setInput(e.target.value)}/>  
                <label htmlFor="option-1" className="option option-1">
                <div className="dot"></div>
                <span>12</span>
                </label>
                <label htmlFor="option-2" className="option option-2">
                <div className="dot"></div>
                <span>24</span>
                </label>
            </div>
            {visibleFunction()}
        </div>
        }
    </div>
    )
}
export default Main;