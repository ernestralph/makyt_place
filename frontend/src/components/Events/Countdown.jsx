import React, { useEffect, useState } from 'react'

const Countdown = () => {
 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
 useEffect(() => {
   const timer = setTimeout(() => {
     setTimeLeft(calculateTimeLeft());
   }, 1000);

   return () => clearTimeout(timer);
 }, [timeLeft]);

 function calculateTimeLeft(){
  let difference = +new Date('2024-01-29') - +new Date(); 
  let timeLeft = {}

  if (difference > 0) {
   timeLeft = {
    days: Math.floor(difference / (1000*60*60*24)),
    hours: Math.floor((difference / (1000*60*60)) % 24),   
    minutes: Math.floor((difference / 1000/60) % 60),   
    minutes: Math.floor((difference / 1000) % 60),   
   }
  }

  return timeLeft;
 }

 const timerComponent = Object.keys(timeLeft).map((interval)=>{
  if(!timeLeft[interval]){ return null;}
  return (
    <span className="text-[25px] text-[#475ad2]">
      {timeLeft[interval]} {interval} {" "}
    </span>
  );
 })
 
  return (
    <div>
     {
      timerComponent.length ? timerComponent : <span className="text-[red] text-[25px]">Time Up!!</span>
     }
    </div>
  );
}

export default Countdown
