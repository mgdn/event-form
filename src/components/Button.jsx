import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.header1};
  background: ${({ theme }) => theme.button};
  border: 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1em 1.5em;
  margin: 1em auto 2em;
  text-transform: uppercase;
  display: block;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.buttonHover};
  }
  :focus {
    outline: 0;
  }
`;

export { Button as default };
