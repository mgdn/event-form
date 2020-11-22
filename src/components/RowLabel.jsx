import styled from "styled-components";

const RowLabel = styled.label`
  color: ${({ theme }) => theme.header3};
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  min-width: 16%;
  display: block;
  padding-top: 0.7rem;
  padding-bottom: 0.5rem;
`;

export { RowLabel as default };
