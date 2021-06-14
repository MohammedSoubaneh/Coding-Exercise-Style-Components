import styled from 'styled-components';
import {BreakPoint} from './BreakPoints'

export const FooterRow = styled.div`
  grid-column: 1 / 24;
  grid-row: 17;
  display: grid;
  grid-template-columns: repeat(23, 1fr);
  ${BreakPoint.laptop} {
    grid-row: 13;
}
`;

export const Approval = styled.div`
  grid-column: 9 / 11;
  display: flex;
  ${BreakPoint.laptopL} {
    grid-column: 7 / 11;   
  }
  ${BreakPoint.tablet} {
    grid-column: 7 / 12;
  }
  ${BreakPoint.mobileL} {
    grid-column: 6 / 12;
  }
  ${BreakPoint.mobileM} {
    grid-column: 3 / 12;
  }
`;

export const Certified = styled.div`
  grid-column: 13 / 17;
  display: flex;
  ${BreakPoint.laptop} {
  grid-column: 14 / 23;   
  }
  ${BreakPoint.mobileM} {
  grid-column: 12 / 24;
  }
`;

export const DoctorImage = styled.img`
  width: 3vw;
  height: auto;
  margin-right: 20px;
  ${BreakPoint.laptopL} {
    width: 3vw;
  }
  ${BreakPoint.laptop} {
    width: 7vw;
  }
  ${BreakPoint.tablet} {
    width: 10vw;
  }
  ${BreakPoint.mobileL} {
    width: 8vw;
  }
  ${BreakPoint.mobileM} {
    width: 10vw;
  }
  ${BreakPoint.mobileS} {
    margin-right: 10px;
    width: 10vw;
  }
`;

export const Logo = styled.img`
  width: 3vw;
  height: auto;
  margin-right: 20px;
  ${BreakPoint.laptopL} {
    width: 4vw;
  }
  ${BreakPoint.laptop} {
    width: 6vw;
  }
  ${BreakPoint.tablet} {
    width: 9vw;
  }
  
  ${BreakPoint.mobileL} {
    width: 9vw;
  }
  ${BreakPoint.mobileM} {
    width: 11vw;
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  font-size: 0.75vw;
  position: relative;
  bottom: 0.5rem;
  ${BreakPoint.laptopL} {
    font-size: 1vw;
  }
  ${BreakPoint.laptop} {
    font-size: 1.5vw;
  }
  ${BreakPoint.tablet} {
    font-size: 2vw;
  }
  ${BreakPoint.mobileM} {
    font-size: 3vw;
  }
  ${BreakPoint.mobileS} {
    font-size: 4vw;
  }
`;