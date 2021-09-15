import React,{ useEffect, useRef, useState } from "react";

const TimerComponent = ({start,update}) =>
{
    // const [timer,setTimer] = useState(0);
    const [timer, setTimer] = useState(0)
    const playingState = useRef(null);

    const play = () =>
    {
        playingState.current = setInterval (()=>{
            setTimer((timer) => timer + 1);  
            // update(timer);
        },2000);
    }

    const formatDate = () =>
    {
        // const []
        // var milli = timer%100;
        // var sec = timer/100;
        // var min = timer/600;
        // // console.log(milli);
        // var formattedDate = ((min>10)?min:"0"+min)+" : "+((sec>10)?sec:"0"+sec)+" : "+((milli>10)?milli:"0"+milli);
        // return formattedDate;
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

        // useEffect(()=>{
        //         update(getHours);
        // },[getHours])

        // var sec = `0${(timer % 60)}`.slice(-2);
        // var minutes = '00';
        // if(timer>59)
        //  minutes = `${(Math.floor(timer / 60))}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`
        // return `${minutes%60} : ${sec}`
    } 
    if(start)
    {
        play();
    }
    return(
    <div>{start?<h1>{formatDate()}</h1>:null}</div>);
}

export default TimerComponent;