import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledTextBox = styled.textarea`
  width: 97%;
  height: 6.5rem;
  overflow: auto;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  margin: left;
  padding: 1rem;
  background-color: ${useColor("gray")};
`;

export default StyledTextBox;
