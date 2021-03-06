import styled from 'styled-components';

export const MainDial = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 100%;
    border: 4px solid silver;
    position: relative;
`;

export const SubDial = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 100%;
    border: 2px solid silver;
    position: absolute;
`;

export const SubDialA = styled(SubDial)`
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
`;

export const SubDialB = styled(SubDial)`
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
`;

export const SubDialC = styled(SubDial)`
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
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
`;

export const HandM = styled(Hand)`
    width: 10px;
    height: 220px;
`;

export const HandS = styled(Hand)`
    width: 5px;
    height: 240px;
    background-color: red;
`;

export const HandHs = styled(Hand)`
    width: 6px;
    height: 50px;
`;

export const HandMs = styled(Hand)`
    width: 6px;
    height: 60px;
`;

export const SubDialTick = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: center bottom;
    width: 5px;
    height: 90px;
    transform: ${props => `translateX(-50%) rotate(${props.deg}deg)`};
    & > div {
        background-color: silver;
        width: 100%;
        height: 20%;
    }
`;

export const MainDialTick = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: center bottom;
    width: 7px;
    height: 250px;
    transform: ${props => `translateX(-50%) rotate(${props.deg}deg)`};
    & > div {
        background-color: silver;
        width: 100%;
        height: 15%;
    }
`;

export const MainDialMinTick = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: center bottom;
    width: 4px;
    height: 250px;
    transform: ${props => `translateX(-50%) rotate(${props.deg}deg)`};
    & > div {
        background-color: silver;
        width: 100%;
        height: 4%;
    }
`;
