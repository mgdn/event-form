import React from "react";
import styled, { css } from "styled-components";

const style = css`
  font-family: sans-serif;
  font-size: 1em;
  border: 2px solid ${({ theme }) => theme.borderColor};
  padding: 0.5em;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  width: ${({ size }) => size || "100%"};
  &[type="date"],
  &[type="time"] {
    width: ${({ size }) => size || "auto"};
    color: ${({ theme, value }) => (value ? theme.text : theme.placeholder)};
  }
  :focus {
    outline: 0;
  }
  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

const StyledInput = styled.input`
  ${style};
`;

const StyledTextarea = styled.textarea`
  ${style};
`;

const Input = ({ type = "text", multiline, ...rest }) => {
  const Component = multiline ? StyledTextarea : StyledInput;

  return <Component type={type} {...rest} />;
};

export { Input as default };
