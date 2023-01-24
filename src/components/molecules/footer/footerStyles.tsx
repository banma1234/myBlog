import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledFooter = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${useColor("black")};
`;

export default StyledFooter;
