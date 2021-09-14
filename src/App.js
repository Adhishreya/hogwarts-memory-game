import "./styles.css";
import data from './data.json';
import { useEffect, useState } from "react";
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
          }}>{display && position.length<=2 &&  position.includes(index) || correctIndex.includes(cards.id)? <img src={cards.src} alt={cards.id}/> : null}</div>)
        }
      </div>);
    // []))
    

}


function TimerComponent()
{
  // var Interval;
  // var min=0,s=0,ms=0;
  // clearInterval(Interval);
  // setInterval(()=>{
  //     ms+=1;
  //     if(ms>99)
  //     {
  //       s+=1;
  //       ms=0;
  //     }
  //     if(s>59)
  //     {
  //       s=0;
  //       min+=1;
  //     }
  // },100);
  // return(<div>{min+" : "+s + " : "+ms}</div>);
}


export default function App() {
  const [input , setInput] = useState(0);
  var Interval;
  // var min=0,s=0,ms=0;
  const[min,setMin] = useState(0);
  const[s,setS] = useState(0);
  const[ms,setMs] = useState(0);
  const [counter , setCounter] = useState([0,0,0])

  const stopWatch = () =>
  {
    
  }
  // clearInterval(Interval);
  // console.log(counter)
  // setInterval(()=>{
    // console.log("running")
      // ms+=1;
      // setMs(ms+1)
      // setCounter([counter[0],counter[1],counter[2]+1]);
      // if(counter[2]>99)
      // if(ms>99)
      // {
      //   // s+=1;
      //   // ms=0;
      //   setMs(0);
      //   setS(s+1);
      //   // setCounter([counter[0],counter[1]+1,0]);
      //   // setCounter([counter[0],counter[1],0],counter[2]);
      // }
      // // if(counter[1]>59)
      // if(s>59)
      // {
      //   // s=0;
      //   // min+=1;
      //   setS(0);
      //   setMin(min+1);
      //   // setCounter([counter[0]+1,0,counter[2]]);
      //   // setCounter(counter[0]+1,counter[1],counter[2]);
      // }
      // console.log(min+" : "+s + " : "+ms);
      // setCounter([min,s,ms]);
  // },1000);
useEffect(()=>{
  // setCounter([min,s,ms]);
  console.log(min+" : "+s + " : "+ms);
  setInterval(()=>{
    // stopWatch();
    setMs(ms+1);
    if(ms>99)
      {
        // s+=1;
        // ms=0;
        setMs(0);
        setS(s+1);
        // setCounter([counter[0],counter[1]+1,0]);
        // setCounter([counter[0],counter[1],0],counter[2]);
      }
      // if(counter[1]>59)
      if(s>59)
      {
        // s=0;
        // min+=1;
        setS(0);
        setMin(min+1);
        // setCounter([counter[0]+1,0,counter[2]]);
        // setCounter(counter[0]+1,counter[1],counter[2]);
      }
  },1000);

},[ms])

  return (
    <div className="App" style={{  }}>
      <h1>Number of grids to play with</h1>
      {/* <TimerComponent/> */}
      {/* <div>{counter[0]+" : "+counter[1] + " : "+counter[2]}</div> */}
      {/* <div>{min+" : "+s + " : "+ms}</div> */}
      <input name="tiles" type="radio" value="12" onChange={e=>setInput(e.target.value)}/>12
      <input name="tiles" type="radio" value="24" onChange={e=>setInput(e.target.value)}/>24
      {input ? <CardComponent tiles={input}/>:null}
    </div>
  );
}
