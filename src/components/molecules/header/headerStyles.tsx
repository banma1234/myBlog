import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: ${useColor("black")};
  z-index: 9999;
`;

export default StyledHeader;
