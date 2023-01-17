import styled, { css } from "styled-components";
import useColor from "../../../../util/hooks/useColor/useColor";

const StyledFooter = styled.div`
  width: 100%;
  height: 120px;
  position: fixed;
  background-color: ${useColor("black")};
`;

export default StyledFooter;
