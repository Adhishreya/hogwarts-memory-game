import { useEffect, useState, useMemo } from "react";
import data from './data.json';
import TimerComponent from './TimerComponent';
import TimerHook from "./TimerHook";
function CardComponent({tiles,start})
{
  const [display,setDisplay] = useState(0);
  const [position,setPosition] = useState([]);
  const [cardComponents,setCardComponents] = useState([]);
  const [value,setValue] = useState([]);
  const [score,setScore]=useState(0);
  const [turned,setTilesTurned] =  useState(0);
  const [correctIndex,setCorrectIndex] = useState([]);
  const [update , setUpdate ]= useState(0);
  const [obliviate,setObliviate] = useState(false);
  const [win,setWin] = useState(false);
  const updateInterval = (val) =>
  {
      setUpdate((update)=>update+1);
  }

  const updateOverTime = (val) =>{
        setObliviate(val);
  }
  useEffect(()=>{
      var cards = []
      if(tiles==12)
      {
          cards = data.slice(0,6);
      }
      else
      {
          cards = data;
      }
      cards = cards.concat(cards);
      cards.sort(()=>Math.random()-0.3);

      setCardComponents(cards);
  },[tiles]);
  useEffect(()=>{
    if(position.length==2 && value[0]!== value[1])
    {
   setTimeout(()=>{
        setPosition([]);
        setValue([]);
      },1000);  
    }
    else if(position.length==2 && value[0]===value[1]){
        setScore(score+1);
        setCorrectIndex([...correctIndex,value[0]]);
        setPosition([]);
        setValue([]);
        
        
    }
    if(score*10 == 60 && tiles == Number(12) || score*10 == 120 && tiles == Number(24))
        {
            setWin(true);
            console.log(win)
        }
  },[position]);
      return (<div className="">

<div>
{win ? <div className="winner"><h3>Congratulations!!!</h3><h4>Your score : {score*10}</h4><h5>Looks like you've won the house cup!!!</h5><img className="won" src="https://i.pinimg.com/736x/78/22/ee/7822eed7c609befdffbeebfabd066906.jpg"/></div> : !obliviate ?<div className="">
          {start? <TimerHook obliviate={updateOverTime}/> : null}
        <h1>Score:{score*10}</h1>
        <div>
        Number of tiles turned {turned}
      </div>
      <div className="cardContainer">
        {
          cardComponents.map((cards,index)=><div className="tiles" key={index} onClick={()=>{
            setDisplay(1);
            setTilesTurned((turned) => turned+1);
            if(! position.includes(index))
            {setPosition([...position,index]);
            setValue([...value,cards.id])}
          }}>{display && position.length<=2 &&  position.includes(index) || correctIndex.includes(cards.id)? <img src={cards.src} alt={cards.id}/> : <img src="https://m.media-amazon.com/images/I/71KVodZRuhL._SX425_.jpg"/>}</div>)
        }
        </div>

        </div>:<div><h4>Your score : {score*10}</h4><h5>Looks like you were cast a memory charm</h5><img className="obliviate" src="https://cdn.dribbble.com/users/100845/screenshots/13941430/media/cc3abbd050bb0fa2c345b48bb2638323.png?compress=1&resize=1600x1200"/></div>}
</div>
      </div>);
    

}
export default CardComponent;