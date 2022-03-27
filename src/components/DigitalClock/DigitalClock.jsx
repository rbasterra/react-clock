import React, { useState, useEffect } from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai';

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <>
        <h1 className='digital-clock__title'>Clock</h1>
        <div className='digital-clock'>
            <AiOutlineClockCircle className='digital-clock__icon'/>
            <h2>{clockState}</h2>
        </div>
    </>
  )
}

export default DigitalClock