import styled from 'styled-components';
import { BreakPoint } from './BreakPoints';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(23, 1fr);
    z-index: 20;
`;

export const VideoContainer = styled.div`
    position: relative;
    right: 1px;
    grid-column: 2 / 23;
    ${BreakPoint.laptopL} {
        grid-column: 1 / 24;
        padding-left: 25px;
        padding-right: 25px;
    }
    ${BreakPoint.laptop} {
        grid-column: 1 / 24;
        padding-left: 20px;
        padding-right: 20px;
    }
    ${BreakPoint.tablet} {
        grid-column: 1 / 24;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const Starwars = styled.video`
    width: 100%;
    height: 45rem;
    object-fit: fill;
    ${BreakPoint.laptopL} {
        height: 40rem;
        position: relative;
        bottom: 3rem;
    }
    ${BreakPoint.laptop} {
        height: 30rem;
        position: relative;
        bottom: 8rem;
    }
    ${BreakPoint.tablet}{
        height: 30rem;
        bottom: 8rem;
    }
    ${BreakPoint.mobileL} {
        height: 20rem;
    }
    ${BreakPoint.mobileM} {
        height: 15rem;
    }
    ${BreakPoint.mobileS} {
        height: 10rem;
    }
`;

export const ExitBtn = styled.img`
    position: absolute;
    top: 1rem;
    right: 1.5rem;
`;

export const Close = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
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
`;

export const HoverWrapper = styled.div`
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
`;