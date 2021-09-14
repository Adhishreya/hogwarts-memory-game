import "./styles.css";
import data from './data.json';
import { useEffect, useState, useMemo } from "react";
import TimerComponent from './TimerComponent';
function CardComponent({tiles})
{
  const [display,setDisplay] = useState(0);
  const [position,setPosition] = useState([]);
  // var cardComponents = [] ;
  const [cardComponents,setCardComponents] = useState([]);
  const [value,setValue] = useState([]);
  const [score,setScore]=useState(0);

  const [correctIndex,setCorrectIndex] = useState([]);
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
  // cardComponents = cardComponents.reduce((curVal,nextVal,index,array)=>{
      // return cardComponents.concat([curVal,nextVal]);
      // },[]);
      cards.sort(()=>Math.random()-0.3);

      setCardComponents(cards);
  },[tiles]);

  useEffect(()=>{
    if(position.length==2 && value[0]!== value[1])
    {
      console.log(value[0]!==value[1])
      setTimeout(()=>{
        setPosition([]);
        setValue([]);
      },5000);  
      clearInterval()
    }
    else if(position.length==2 && value[0]===value[1]){
        // score++;
        setScore(score+1);
        setCorrectIndex([...correctIndex,value[0]]);
        setPosition([]);
        setValue([]);
    }
  },[position]);

// setInterval(()=>{
//   setPosition([]);
//   setValue([]);
// },8000);
    // setInterval(()=>)
      return (<div className="cardContainer">
        <h1>Score:{score}</h1>
        {
          cardComponents.map((cards,index)=><div className="tiles" key={index} onClick={()=>{
            setDisplay(1);
            setPosition([...position,index]);
            setValue([...value,cards.id])
          }}>{display && position.length<=2 &&  position.includes(index) || correctIndex.includes(cards.id)? <img src={cards.src} alt={cards.id}/> : <img src="https://m.media-amazon.com/images/I/71KVodZRuhL._SX425_.jpg"/>}</div>)
        }
      </div>);
    // []))
    

}

export default function App() {
  const [input , setInput] = useState(0);
  const[min,setMin] = useState(0);
  const[s,setS] = useState(0);
  const[ms,setMs] = useState(0);
  const [start,setStart] = useState(false);
  return (
    <div className="App" style={{  }}>
      <h1>Number of grids to play with</h1>
      {/* <TimerComponent/> */}
      {/* <div>{counter[0]+" : "+counter[1] + " : "+counter[2]}</div> */}
      {/* <div>{min+" : "+s + " : "+ms}</div> */}
      <input name="tiles" type="radio" value="12" onChange={e=>setInput(e.target.value)}/>12
      <input name="tiles" type="radio" value="24" onChange={e=>setInput(e.target.value)}/>24

      <h1><button onClick={()=>setStart(~start)}>Start</button></h1>
      {/* <TimerComponent start={start}/> */}
      {input ? <CardComponent tiles={input}/>:null}
    </div>
  );
}
