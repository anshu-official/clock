import React, { useState } from 'react'
import './App.css'

const App = () => {
    let time= new Date().toLocaleTimeString();
    
   const[ctime,Setctime]=useState(time);
   const UpdateTime=()=>{
    
     time= new Date().toLocaleTimeString();
     Setctime(time);
    
   };
   setInterval(UpdateTime,1000);

  return (
    <div className='divv'>
       <h1>Digital Clock</h1>
       <div className='time'>
          {ctime}
       </div>
    </div>
  )
}

export default App
