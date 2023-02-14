import React, { useEffect, useState } from 'react';


const Timer = () => {

  const [timer ,setTimer] = useState(0);
  const [value,setValue] = useState(false)

  const getData = (e)=>{
    setTimer(e.target.value);
    setValue(false)
  }
 
  useEffect(() => {
    const timerId = setInterval(() => setTimer(timer-1), 1000);
    return () => clearInterval(timerId);
});

  return (
   <div className='input'>

    {
      value? 
      <p className='para'>{timer}</p>
      : null
    }
    <input type="number" onChange={getData}/>
    <button onClick={()=>setValue(true)} onKeyDown={()=>setValue(true)}>Start</button>
    <button onClick={""}>Pause</button>
    </div>
  
   
  )
}

export default Timer


