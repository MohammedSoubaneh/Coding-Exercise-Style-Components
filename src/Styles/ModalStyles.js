import styled from 'styled-components';
import { BreakPoint } from './BreakPoints';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const VideoContainer = styled.div`
    max-width: 1280px;
    display: block;
    margin: 25px;
`;

export const Starwars = styled.video`
    max-width: 1280px;
    display: block;
    margin: 0 auto;
    ${BreakPoint.desktop} {
        width: 100%;
        height: auto;
    }
`;

export const Close = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    left: 40%;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: white;
    }
    &:before {
        transform: rotate(45deg); 
    }
    &:after {
        transform: rotate(-45deg);
    }
    ${BreakPoint.mobileM} {
        bottom: 10%;
    }
`;