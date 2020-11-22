import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledLegend = styled.legend`
  width: 100%;
  color: ${({ theme }) => theme.header2};
  font-weight: bold;
  font-size: 1.8em;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  float: left;
`;

const Fieldset = ({ legend, children, ...rest }) => (
  <Card as="fieldset" {...rest}>
    <StyledLegend>{legend}</StyledLegend>
    {children}
  </Card>
);

export { Fieldset as default };
