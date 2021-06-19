import styled from 'styled-components';
import {BreakPoint} from './BreakPoints'

export const FooterRow = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin: 0px;
`;

export const Approval = styled.div`

`;

export const Certified = styled.div`

`;

export const DoctorImage = styled.img`
  width: 40px;
  height: auto;
  margin-right: 15px;
  ${BreakPoint.mobileM} {
    width: 35px;
    height: auto;
  }
  ${BreakPoint.mobileS} {
    margin-right: 10px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: 15px;
  margin-left: 20px;
  height: auto;
  ${BreakPoint.mobileM} {
    width: 40px;
  }
  ${BreakPoint.mobileS} {
    margin-left: 20px;
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  margin-right: 40px;
  ${BreakPoint.mobileM} {
    font-size: 12px;
    margin-right: 10px;
  }
  ${BreakPoint.mobileS} {
    margin-right: 0;
  }
`;