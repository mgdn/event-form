import styled from "styled-components";

const ControlsWrapper = styled.div`
  width: 100%;
  min-width 100%;
  display:inline-block;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.M}) {
    width: 60%;
    min-width 60%;
  }
`;

export { ControlsWrapper as default };
