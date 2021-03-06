import React, { useState, useEffect } from 'react';
import * as styled from './Dials.styled';
import tickData from './tickData';
import SubDial from './SubDial';
import { transformHands, updateHands, getAmPm } from './utilityFunctions';

export default function MainDial() {
    const [time, setTime] = useState([0, 0, 0]);

    useEffect(() => {
        setInterval(() => setTime(updateHands(0)), 1000);
    }, []);

    return (
        <styled.MainDial>
            <styled.AmPm>{getAmPm(0)}</styled.AmPm>
            {tickData.main.map(tick => (
                <styled.Tick tick={tick}>
                    <div />
                </styled.Tick>
            ))}
            <SubDial position='left' city='paris' offset={1} />
            <SubDial position='right' city='tokyo' offset={9} />
            <SubDial position='bottom' city='new delhi' offset={5.5} />
            <styled.Hand size={[15, 160]} style={transformHands(time[0])} />
            <styled.Hand size={[10, 220]} style={transformHands(time[1])} />
            <styled.Hand size={[5, 240]} style={transformHands(time[2])} />
            <styled.Cap size={20} />
        </styled.MainDial>
    );
}
