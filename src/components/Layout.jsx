import styled from "styled-components";

const Layout = styled.div`
  margin: 0 auto;
  max-width: 90%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.S}) {
    width: 530px;
    min-width: 530px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.M}) {
    width: 720px;
    min-width: 720px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.L}) {
    width: 850px;
    min-width: 850px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.XL}) {
    width: 1100px;
    min-widh: 1100px;
  }
`;

export { Layout as default };
