import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {BsStopwatch} from 'react-icons/bs';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timerOn]);

  return (
    <div className='digital-clock'>
        <h1 className='digital-clock__title'>StopWatch</h1>
        <div className='digital-clock__container'>
            <BsStopwatch className='digital-clock__icon'/>
            <h2>
                <span>{('0' + Math.floor((time/60000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time/1000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time/10) % 100)).slice(-2)}</span>
            </h2>
            <div>
                
                {!timerOn && time === 0 &&
                    <Button className='digital-clock__button' variant='outline-warning' onClick={() => setTimerOn(true)}>Start</Button>}
                {timerOn && <Button className='digital-clock__button' variant='outline-warning' onClick={() => setTimerOn(false)}>Stop</Button>}
                {!timerOn && time > 0 &&
                    <Button className='digital-clock__button' variant='outline-warning' onClick={() => setTimerOn(true)}>Resume</Button>}
                {!timerOn && time > 0 &&
                    <Button className='digital-clock__button' variant='outline-warning' onClick={() => setTime(0)}>Reset</Button>}
            </div>
        </div>

    </div>
  )
}

export default StopWatch