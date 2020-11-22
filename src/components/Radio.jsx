import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  padding: 0.8em 0 0.8em 0;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  > input {
    position: absolute;
    opacity: 0;
    left: 0;
  }
  > span {
    display: inline-block;
    height: 1.1em;
    width: 1.1em;
    margin: -0.2em 0.5em 0 0;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.borderColor};
    background: ${({ theme }) => theme.text};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.borderColor} inset,
      0 0 0 1em white inset;
  }
  > input:checked ~ span {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.borderColor} inset,
      0 0 0 0.25em white inset;
  }
`;

const Radio = ({ label, className, ...rest }) => {
  return (
    <StyledLabel className={className}>
      <input type="radio" {...rest} />
      <span />
      {label}
    </StyledLabel>
  );
};

export { Radio as default };
