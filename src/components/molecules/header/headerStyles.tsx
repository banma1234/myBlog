import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledHeader = styled.div`
  width: 100%;
  height: 5%;
  position: fixed;
  background-color: ${useColor('black')};
`;

export default StyledHeader;
