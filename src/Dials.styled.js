import styled, { css } from 'styled-components';

export const MainDial = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 100%;
    border: 4px solid silver;
    position: relative;
    background-image: radial-gradient(transparent, #343434);
    box-shadow: 0 0 140px #343434;
    flex-shrink: 0;
`;

export const SubDial = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 100%;
    border: 2px solid silver;
    position: absolute;
    background-color: #343434;
    ${props =>
        (props.position === 'left' &&
            css`
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
            `) ||
        (props.position === 'right' &&
            css`
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
            `) ||
        (props.position === 'bottom' &&
            css`
                bottom: 15px;
                left: 50%;
                transform: translateX(-50%);
            `)}
`;

export const City = styled.div`
    color: silver;
    text-transform: uppercase;
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
`;

export const AmPm = styled.div`
    color: silver;
    text-transform: uppercase;
    position: absolute;
    top: ${props => (props.subDial ? 40 : 90)}px;
    width: 100%;
    text-align: center;
    font-size: ${props => (props.subDial ? 12 : 20)}px;
    letter-spacing: 2px;
`;

export const Hand = styled.div`
    position: absolute;
    background-color: ${props => props.color || 'white'};
    bottom: 50%;
    left: 50%;
    transform-origin: center bottom;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    width: ${props => props.size[0]}px;
    height: ${props => props.size[1]}px;
`;

export const Cap = styled.div`
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
`;

const tickDimensions = {
    hrLong: { width: '10px', height: '30%' },
    hrShort: { width: '10px', height: '4%' },
    hr: { width: '7px', height: '15%' },
    min: { width: '4px', height: '4%' },
    sub: { width: '5px', height: '15%' },
    subLong: { width: '5px', height: '30%' },
};

export const Tick = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: center bottom;
    width: ${props => tickDimensions[props.tick.type].width};
    height: 50%;
    transform: ${props => `translateX(-50%) rotate(${props.tick.deg}deg)`};
    & > div {
        background-color: silver;
        width: 100%;
        height: ${props => tickDimensions[props.tick.type].height};
    }
`;

export const Bell = styled.i`
    position: absolute;
    font-size: 25px;
    opacity: ${props => (props.alert ? 1 : 0.5)};
    ${props =>
        (props.position === 'left' &&
            css`
                left: -55px;
                top: 50%;
                transform: translateY(-50%);
            `) ||
        (props.position === 'right' &&
            css`
                right: -55px;
                top: 50%;
                transform: translateY(-50%);
            `) ||
        (props.position === 'bottom' &&
            css`
                bottom: -55px;
                left: 50%;
                transform: translateX(-50%);
            `) ||
        css`
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
        `}
`;
