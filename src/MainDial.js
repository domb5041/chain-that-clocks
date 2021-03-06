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

    const adjustForTimezone = offset => {
        const d = new Date();
        const mSecUTC = d.getTime() + d.getTimezoneOffset() * 60000;
        const newTime = mSecUTC + offset * 3600000;
        return new Date(newTime);
    };

    const updateHands = offset => {
        const d = adjustForTimezone(offset);

        const hrsToSeconds = d.getHours() * 3600;
        const minsToSeconds = d.getMinutes() * 60;
        const seconds = d.getSeconds();

        const hrsToDeg =
            (hrsToSeconds + minsToSeconds + seconds) * (360 / 43200);
        const minsToDeg = (minsToSeconds + seconds) * (360 / 3600);
        const secsToDeg = seconds * (360 / 60);

        return [hrsToDeg, minsToDeg, secsToDeg];
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
