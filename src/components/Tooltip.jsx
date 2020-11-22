import styled from "styled-components";

const Tooltip = styled.div`
  padding: 0.5em;
  color: ${({ theme }) => theme.header1};
  background: ${({ theme }) => theme.errorBg};
  padding: 0.5em;
  margin: 0.5em 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  display: block;
  flex-grow: 1;
  &::before {
    content: "";
    position: absolute;
    border: 0.5em solid transparent;
    top: -1em;
    border-bottom-color: ${({ theme }) => theme.errorBg};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.M}) {
    vertical-align: top;
    margin: 0 0 0.5em 1em;
    &::before {
      top: auto;
      left: -1em;
      border: 0.5em solid transparent;
      border-right-color: ${({ theme }) => theme.errorBg};
    }
  }
`;

export { Tooltip as default };
