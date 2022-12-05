import React from "react";  

const Seconds =(props) => {
    return <div className="container rounded todos d-flex justify-content-around py-3 " >
     <div className="">🕑</div>
     <div className=""> {props.secondsCinco}</div>
     <div className=""> {props.secondsCuatro}</div>
     <div className=""> {props.secondsTres}</div>
     <div className=""> {props.secondsDos}</div>
     <div className=""> {props.secondsUno}</div>
     <div className=""> {props.seconds}</div>

     </div>
     }
     
export default Seconds