import React, { useState, useEffect } from 'react';
import * as styled from './MainDial.styled';

export default function MainDial() {
    const [london, setLondon] = useState([0, 0, 0]);
    const [paris, setParis] = useState([0, 0, 0]);
    const [tokyo, setTokyo] = useState([0, 0, 0]);

    useEffect(() => {
        setInterval(() => setLondon(updateHands(0)), 1000);
        setInterval(() => setParis(updateHands(1)), 1000);
        setInterval(() => setTokyo(updateHands(9)), 1000);
    }, []);

    const updateHands = timezone => {
        const d = new Date();

        const mSecUTC = d.getTime() + d.getTimezoneOffset() * 60000;
        const newTime = mSecUTC + timezone * 3600000;
        const dAdjusted = new Date(newTime);
        const hoursInDegrees =
            (dAdjusted.getHours() * 3600 +
                dAdjusted.getMinutes() * 60 +
                dAdjusted.getSeconds()) *
            0.00833333;
        const minutesInDegrees =
            (dAdjusted.getMinutes() * 60 + dAdjusted.getSeconds()) * 0.1;
        const secondsInDegrees = dAdjusted.getSeconds() * 6;

        return [hoursInDegrees, minutesInDegrees, secondsInDegrees];
    };

    const transformHands = hand => ({
        transform: `translateX(-50%) rotate(${hand}deg)`,
    });

    return (
        <styled.MainDial>
            <styled.SubDialA>
                <styled.HandHs style={transformHands(paris[0])} />
                <styled.CapSmall />
            </styled.SubDialA>
            <styled.SubDialB>
                <styled.HandHs style={transformHands(tokyo[0])} />
                <styled.CapSmall />
            </styled.SubDialB>
            <styled.HandH style={transformHands(london[0])} />
            <styled.HandM style={transformHands(london[1])} />
            <styled.HandS style={transformHands(london[2])} />
            <styled.Cap />
        </styled.MainDial>
    );
}

// style={{ transform: `translateX(-50%) rotate(${time[2]}deg)` }}
