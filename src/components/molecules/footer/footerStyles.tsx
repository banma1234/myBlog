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
  grid-template-columns: 160px 1fr 8rem;
  @media all and (max-width: 935px) {
    grid-template-columns: 1fr 8rem;
  }
`;

export const FooterMenu = styled.ul`
  max-width: 250px;
  margin-top: -0.2rem;
  margin-left: -1.5rem;
  li {
    padding: 0.3rem;
  }
`;

export const FooterAsideMenu = styled.div`
  margin-top: 4.5rem;
`;
