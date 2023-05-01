import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledTextBox = styled.textarea`
  width: 95%;
  height: 6.5rem;
  overflow: auto;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  margin-left: 1rem;
  padding: 1rem;
`;

export default StyledTextBox;
