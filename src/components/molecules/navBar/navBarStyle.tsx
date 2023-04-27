import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

export const StyledNavBar = styled.div`
  height: 30rem;
  padding: 10px;
  position: fixed;
  margin-top: 3.5rem;
  @media all and (max-width: 1300px) {
    display: none;
  }
`;

export const NavTitle = styled.div`
  width: 100%;
  font-weight: 900;
  border-bottom: 2px solid;
  border-color: ${useColor("green")};
`;

export const NavItem = styled.div`
  margin-left: 0.4rem;
`;
