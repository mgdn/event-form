import styled from "styled-components";

const FieldDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  padding: 0.3em;
  color: ${({ theme }) => theme.placeholder};
`;

export { FieldDescription as default };
