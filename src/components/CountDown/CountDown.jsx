import React, { useEffect, useState } from 'react';
import {AiOutlineCalendar} from 'react-icons/ai'

const CountDown = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const countDownDate = new Date ('Jan 1, 2023 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance /(1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60))/1000);
            setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            if (distance < 0) {
                clearInterval(interval);
                setTime('COUNTDOWN FINISHED');
            }

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <div className='digital-clock'>

        <h1 className='digital-clock__title'>CountDown</h1>
        <div className='digital-clock__container'>
            <AiOutlineCalendar className='digital-clock__icon'/>
            <h2>{time}</h2>
        </div>

    </div>
  )
}

export default CountDown