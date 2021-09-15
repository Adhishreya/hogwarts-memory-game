import { useEffect, useState, useMemo } from "react";
import data from './data.json';
function CardComponent({tiles})
{
  const [display,setDisplay] = useState(0);
  const [position,setPosition] = useState([]);
  const [cardComponents,setCardComponents] = useState([]);
  const [value,setValue] = useState([]);
  const [score,setScore]=useState(0);
  const [turned,setTilesTurned] =  useState(0);
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
      // console.log(value[0]!==value[1])
  // var Interaval =   
   setTimeout(()=>{
        setPosition([]);
        setValue([]);
      },1000);  
      // clearInterval(Interaval)
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
      return (<div className="">
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
      </div>);
    // []))
    

}
export default CardComponent;