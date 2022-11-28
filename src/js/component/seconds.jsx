import React from "react";  

const Seconds =(props) => {
    return <div className="container rounded todos d-flex justify-content-around py-3 " >
     <div className="">🕑</div>
     <div className="">0 {props.secondCinco}</div>
     <div className="">0 {props.secondCuatro}</div>
     <div className="">0 {props.secondsTres}</div>
     <div className="">0 {props.secondsDos}</div>
     <div className="">0 {props.secondsUno}</div>
     <div className=""> {props.seconds}</div>

     </div>
     }
     
export default Seconds