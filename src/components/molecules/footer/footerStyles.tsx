import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

export const StyledFooter = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${useColor("black")};
`;

export const FooterContainer = styled.div`
  display: grid;
  height: 80%;
  justify-content: center;
  padding: 1rem;
  border-left: 2rem solid;
  border-color: ${useColor("green")};
  color: ${useColor("gray")};
  grid-template-columns: 160px 1fr;
  @media all and (max-width: 576px) {
    grid-template-columns: 0 1fr;
  }
`;

export const FooterMenu = styled.ul`
  list-style: none;
  margin-top: -0.2rem;
  margin-left: -1.5rem;
  li {
    padding: 0.3rem;
    &:hover {
      transition: all 0.3s;
      color: ${useColor("green")};
    }
  }
`;
