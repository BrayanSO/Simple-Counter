import React, { useEffect, useState } from "react";
import Seconds from "./seconds.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [minutes2, setMinutes2] = useState(0);
  const [hours, setHours] = useState(0);
  const [hours2, setHours2] = useState(0);
  useEffect(() => {
    var intervalId = setInterval(() => setSeconds(seconds + 1), 1000);
    if (seconds == 10) {
      setSeconds(0);
      setSeconds2(seconds2 + 1);
    } else if (seconds2 == 6) {
      setSeconds(0);
      setSeconds2(0);
      setMinutes(minutes + 1);
    } else if (minutes == 10) {
      setSeconds(0);
      setSeconds2(0);
      setMinutes(0);
      setMinutes2(minutes2 + 1);
    } else if (minutes2 == 6) {
      setSeconds(0);
      setSeconds2(0);
      setMinutes(0);
	  setMinutes2(0)
      setHours(hours + 1);
    }else if(hours==10){
		setSeconds(0)
		setSeconds2(0)
		setMinutes(0)
		setMinutes2(0)
		setHours(0)
		setHours2(hours2+1)
   }else if(hours2==6){
	setSeconds(0)
	setSeconds2(0)
	setMinutes(0)
	setMinutes2(0)
	setHours(0)
	setHours2(0)
}

    return () => clearInterval(intervalId);
  });
  return (
    <Seconds
      seconds={seconds}
      secondsUno={seconds2}
      secondsDos={minutes}
      secondsTres={minutes2}
      secondsCuatro={hours}
      secondsCinco={hours2}
    />
  );
};

export default Home;
