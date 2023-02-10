import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledTextBox = styled.textarea`
  width: 100%;
  height: 7.5rem;
  overflow: auto;
  outline: none;
  border: none;
  margin: left;
  background-color: ${useColor("gray")};
`;

export default StyledTextBox;
