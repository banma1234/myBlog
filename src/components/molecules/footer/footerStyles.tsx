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
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr 8rem;
  }
`;

export const FooterMenu = styled.ul`
  max-width: 250px;
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

export const FooterAsideMenu = styled.div`
  margin-top: 4.5rem;
`;
