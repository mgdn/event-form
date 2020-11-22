import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.headerBg};
`;

const Title = styled.h1`
  font-size: 2.2em;
  font-weight: 100;
  color: ${({ theme }) => theme.header1};
  padding: 1em 2rem 1em;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <Layout>
      <Title>{title}</Title>
    </Layout>
  </StyledHeader>
);

export { Header as default };
