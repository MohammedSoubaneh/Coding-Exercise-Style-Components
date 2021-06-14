import styled from 'styled-components';
import { BreakPoint } from './BreakPoints';

export const HeroWarapper = styled.div`
  grid-column: 2 / 23;
  grid-row: 2 / span 14;
  border-radius: 30px;
  ${BreakPoint.mobileM} {
    grid-row: 4 / span 11;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
  ${BreakPoint.laptop} {
    height: 75%;
}
  ${BreakPoint.mobileM} {
    border-radius: 10px;
  }
`;