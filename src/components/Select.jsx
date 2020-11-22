import styled from "styled-components";

const getBgImageUrl = ({ theme }) =>
  `url("data:image/svg+xml;utf8,<svg fill='${theme.text.replace(
    "#",
    "%23"
  )}' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`;

const Select = styled.select`
  font-family: sans-serif;
  font-size: 1em;
  border: 2px solid ${({ theme }) => theme.borderColor};
  padding: 0.5em;
  color: ${({ theme, value }) => (value ? theme.text : theme.placeholder)};
  width: 100%;
  appearance: none;
  background-image: ${getBgImageUrl};
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-color: transparent;
  :focus {
    outline: 0;
  }
  optgroup {
    color: ${({ theme }) => theme.header3};
    background: #f0f0f0;
    border: 0;
  }
  option {
    color: ${({ theme, value }) => theme.selectText};
    background: #f0f0f0;
    border: 0;
    padding: 5em;
    &[value=""] {
      color: ${({ theme }) => theme.header3};
    }
  }
`;

export { Select as default };
