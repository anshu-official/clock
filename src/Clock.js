import React, { useState } from 'react'

const Clock = () => {
    let time= new Date().toLocalTimeString();
    
   const[ctime,Setctime]=useState(time);
   const UpdateTime=()=>{
    
     time= new Date().toLocalTimeString();
     Setctime(time);
    
   };
   setInterval(UpdateTime,1000);

  return (
    <div>
       <h1>{ctime}</h1>
    </div>
  )
}

export default Clock;
