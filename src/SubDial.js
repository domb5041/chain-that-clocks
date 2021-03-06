import React, { useState, useEffect } from 'react';
import * as styled from './Dials.styled';
import tickData from './tickData';
import { transformHands, updateHands, getAmPm } from './utilityFunctions';

export default function SubDial({ position, city, offset }) {
    const [time, setTime] = useState([0, 0, 0]);

    useEffect(() => {
        setInterval(() => setTime(updateHands(offset)), 1000);
    }, []);

    return (
        <styled.SubDial position={position}>
            <styled.AmPm subDial>{getAmPm(offset)}</styled.AmPm>
            <styled.City>{city}</styled.City>
            {tickData.sub.map(tick => (
                <styled.Tick tick={tick}>
                    <div />
                </styled.Tick>
            ))}
            <styled.Hand size={[6, 50]} style={transformHands(time[0])} />
            <styled.Hand size={[6, 60]} style={transformHands(time[1])} />
            <styled.Cap size={10} />
        </styled.SubDial>
    );
}
