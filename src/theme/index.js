import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};

    * {
      font-family: ${({ theme }) => theme.font};
      box-sizing: border-box;
    }
    
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.M}) {
      font-size: 12px;
      
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.XL}) {
      font-size: 16px;
    }
  }
`;

const breakpoints = {
  S: "600px",
  M: "768px",
  L: "992px",
  XL: "1200px",
};

const theme = {
  bg: "#F7F7F7",
  headerBg: "#35588e",
  font: "sans-serif",
  header1: "#FFFFFF",
  header2: "#525f68",
  header3: "#bbc3c6",
  text: "#888888",
  placeholder: "#DDDDDD",
  cardBg: "#FFFFFF",
  boxShadow: "0px 0px 12px #E8E8E8",
  borderColor: "#E8E8E8",
  selectBg: "#F0F0F0",
  selectText: "#636363",
  button: "#FF8C1F",
  buttonHover: "#ffa34b",
  buttonBorder: "#d7984b",
  successBg: "#EEFCF2",
  success: "#A3C8A9",
  errorBg: "#FDB3B4",
  breakpoints,
};

export { theme as default };
