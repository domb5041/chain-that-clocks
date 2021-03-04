import styled from 'styled-components';

export const MainDial = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 100%;
    border: 4px solid silver;
    position: relative;
`;

export const SubDial = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 2px solid silver;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const SubDialA = styled(SubDial)`
    left: 15px;
`;

export const SubDialB = styled(SubDial)`
    right: 15px;
`;

const Hand = styled.div`
    position: absolute;
    background-color: white;
    bottom: 50%;
    left: 50%;
    transform-origin: center bottom;
    border-radius: 50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

export const Cap = styled.div`
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

export const CapSmall = styled(Cap)`
    width: 10px;
    height: 10px;
`;

export const HandH = styled(Hand)`
    width: 15px;
    height: 160px;
    transform: ${props => `translateX(-50%) rotate(${props.time[0]}deg)`};
`;

export const HandM = styled(Hand)`
    width: 10px;
    height: 220px;
    transform: ${props => `translateX(-50%) rotate(${props.time[1]}deg)`};
`;

export const HandS = styled(Hand)`
    width: 5px;
    height: 240px;
    transform: ${props => `translateX(-50%) rotate(${props.time[2]}deg)`};
    background-color: red;
`;

export const HandHs = styled(Hand)`
    width: 6px;
    height: 60px;
    transform: ${props => `translateX(-50%) rotate(${props.time[0]}deg)`};
`;

export const HandMs = styled(Hand)`
    width: 6px;
    height: 90px;
    transform: ${props => `translateX(-50%) rotate(${props.time[1]}deg)`};
`;
