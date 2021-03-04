import React, { useState, useEffect } from 'react';
import * as styled from './MainDial.styled';

export default function MainDial() {
    const [time, setTime] = useState([0, 0, 0]);
    const [timeA, setTimeA] = useState([0, 0, 0]);
    const [timeB, setTimeB] = useState([0, 0, 0]);

    useEffect(() => {
        setInterval(updateClock, 1000);
        setInterval(updateClockA, 1000);
        setInterval(updateClockB, 1000);
    }, []);

    const updateClock = () => {
        const d = new Date();
        const h = d.getHours() * 30;
        const m = d.getMinutes() * 6;
        const s = d.getSeconds() * 6;
        setTime([h, m, s]);
    };

    const updateClockA = () => {
        const d = new Date();
        const h = d.getHours() * 30;
        const m = d.getMinutes() * 6;
        const s = d.getSeconds() * 6;
        setTimeA([h, m, s]);
    };

    const updateClockB = () => {
        const d = new Date();
        const h = d.getHours() * 30;
        const m = d.getMinutes() * 6;
        const s = d.getSeconds() * 6;
        setTimeB([h, m, s]);
    };

    return (
        <styled.MainDial>
            <styled.HandH time={time} />
            <styled.HandM time={time} />
            <styled.HandS time={time} />
            <styled.SubDialA>
                <styled.HandHs time={timeA} />
                <styled.HandMs time={timeA} />
            </styled.SubDialA>
            <styled.SubDialB>
                <styled.HandHs time={timeB} />
                <styled.HandMs time={timeB} />
            </styled.SubDialB>
        </styled.MainDial>
    );
}

// style={{ transform: `translateX(-50%) rotate(${time[2]}deg)` }}
