import styled from 'styled-components';
import { BreakPoint } from './BreakPoints';

export const HeroWarapper = styled.div`
  width:100%; 
  max-width:1280px; 
  margin: 25px; 
  display: block; 
  position: relative;
`;

export const Video = styled.video`
  border-radius: 30px;
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  filter: brightness(50%);
  ${BreakPoint.desktop} {
    width: 100%;
    height: auto;
}
  ${BreakPoint.mobileM} {
    display: none; 
  }
`;

export const SmallerVideo = styled.video` 
  display: none;
  filter: brightness(50%);
  ${BreakPoint.mobileM} {
    border-radius: 10px;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;