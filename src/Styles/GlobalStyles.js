import styled, { createGlobalStyle } from 'styled-components';
import Soleil from '../Assets/Soleil_Semibold.otf'


export default createGlobalStyle`
    @font-face {
        font-family: 'Soleil Semibold';
        src: url(${Soleil}) format('opentype');
    }
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(23, 1fr);
  grid-auto-rows: 50px;
  font-family: 'Soleil Semibold';
`;