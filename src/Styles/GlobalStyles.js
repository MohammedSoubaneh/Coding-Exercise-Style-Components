import styled, { createGlobalStyle } from 'styled-components';
import Soleil from '../Assets/Soleil_Semibold.otf'


export default createGlobalStyle`
    @font-face {
        font-family: 'Soleil Semibold';
        src: url(${Soleil}) format('opentype');
    }
`;

export const InnerContainer = styled.div`
  display: flex;
  font-family: 'Soleil Semibold';
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 25px;
`;