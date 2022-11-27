import React, { useEffect, useState } from "react";
import Seconds from "./seconds.jsx";

//include images into your bundle  

//create your first component
const Home = () => {
	const [seconds, setSeconds]= useState(0)
	useEffect (()=>{
	var intervalId=setInterval(()=>setSeconds(seconds+1),1000)
	return ()=>clearInterval(intervalId)
	})
	return <Seconds seconds={seconds}/>
};

export default Home;

