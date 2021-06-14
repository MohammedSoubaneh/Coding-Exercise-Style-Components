import styled from 'styled-components';
import {BreakPoint} from './BreakPoints';

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(23, 1fr);
  grid-auto-rows: 50px;
`;


export const TextOverlay = styled.div`
grid-column: 1 / 24;
grid-row: 2 / span 14;
margin: auto;
width: 100%;
z-index: 2;
${BreakPoint.laptop} {
    grid-row: 1 / span 14;
}
`;

export const HeroText = styled.h1`
text-align: center;
color: white;
font-size: 2.5vw;
${BreakPoint.laptop} {
    font-size: 3vw;
}
${BreakPoint.tablet} {
    font-size: 5vw;
}
${BreakPoint.mobileM}{
    font-size: 5vw;
}
${BreakPoint.mobileS} {
    font-size: 6vw;
}
`;

export const CenterPosition = styled.div`
  display: flex;
  justify-content: center;
`;


export const PlayButton = styled.button`
    justify-items: flex-end;
    box-sizing: border-box;
    width: auto;
    height: 10px;
    border-style: solid;
    border-width: 0.32rem 0px 0.32rem 0.7rem;
    border-color: transparent transparent transparent white;
    text-align: center;
    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: transparent
`;
export const SeeHow = styled.div`
    text-align: center;
    color: black;
    border-color: white;
    border-style: solid;
    border-radius: 50px;
    border-width: 1px;
    font-size: 0.75vw;
    width: 11vw;
    background-color: white;
    display: flex;
    justify-content: center;
    transition: all .5s ease;
    color: #fff;
    background-color : transparent;
  ${BreakPoint.laptop} {
      font-size: 1.5vw;
      width: 20vw;
  }
  ${BreakPoint.mobileL} {
      font-size: 2vw;
      width: 25vw;
  }
  ${BreakPoint.mobileM} {
      font-size: 3.5vw;
      width: 40vw;
  }
  ${BreakPoint.mobileS} {
      font-size: 4vw;
      width: 50vw;
  }
  &:hover {
    color: black;
    background-color: #fff;
    ${PlayButton} {
        border-color: transparent transparent transparent black;
    }
  }
`;

export const Text = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    letter-spacing: 2px;
`;