import styled from "styled-components";

const FormRow = styled.div`
  clear: both;
  margin: 1em 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.M}) {
    display: flex;
    align-items: flex-start;
    justify-content: start;
  }
`;

export { FormRow as default };
