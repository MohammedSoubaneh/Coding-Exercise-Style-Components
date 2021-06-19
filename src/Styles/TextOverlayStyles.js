import styled from 'styled-components';
import {BreakPoint} from './BreakPoints';


export const TextOverlay = styled.div`
    position: absolute; 
    top: 0; 
    left: 0;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 100%;
`;

export const HeroText = styled.h1`
    text-align: center;
    color: white;
    font-size: 40px;
${BreakPoint.tablet} {
    font-size: 30px;
}
${BreakPoint.mobileM}{
    font-size: 25px;
}
${BreakPoint.mobileS} {
    font-size: 20px;
}
`;

export const CenterPosition = styled.div`

`;


export const PlayButton = styled.button`
    box-sizing: border-box;
    width: auto;
    height: 10px;
    border-style: solid;
    border-width: 0.32rem 0px 0.32rem 0.7rem;
    border-color: transparent transparent transparent white;
    text-align: center;
    margin: 0;
    position: relative;
    top: 5px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: transparent;
    transition: all .5s ease;
`;
export const SeeHow = styled.div`
    text-align: center;
    color: black;
    border-color: white;
    border-style: solid;
    border-radius: 50px;
    border-width: 1px;
    font-size: 15px;
    width: 200px;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    transition: all .5s ease;
    color: #fff;
    background-color : transparent;
  &:hover {
    color: purple;
    background-color: #fff;
    cursor: pointer;
    ${PlayButton} {
        border-color: transparent transparent transparent purple;
        cursor: pointer;
    }
  }
`;

export const Text = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    letter-spacing: 2px;
    position: relative;
    top: 2px;
`;