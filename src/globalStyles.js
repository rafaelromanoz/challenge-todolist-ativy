import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  box-sizing: border-box;
  background: ${({ theme }) => (theme ? '#1C1D22' : '#F4EEED')};
  padding: 0;
  font-family: 'Roboto', sans-serif;
h1 {
  color: ${({ theme }) => (theme ? '#E5E5E5' : 'black')};
  }
}`;

export default GlobalStyle;
