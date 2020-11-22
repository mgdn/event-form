import styled from "styled-components";

const Card = styled.div`
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  margin: 1.5em 0;
  display: block;
`;

export { Card as default };
