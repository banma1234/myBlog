import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3.2rem;
  position: fixed;
  background-color: ${useColor("black")};
  z-index: 9999;
  font-size: 18px;
  font-weight: 600;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  margin-right: 1.5rem;
  column-gap: 30px;
  list-style: none;
  color: ${useColor("base")};

  li {
    &:hover {
      transition: all 0.3s;
      color: ${useColor("green")};
    }
  }
`;

export const HeaderLogo = styled.div`
  margin-left: 1.5rem;
  display: flex;
  color: ${useColor("high")};
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 70rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIcon = styled.button`
  width: 2.3rem;
  height: 2.3rem;
  border: none;
  background-color: ${useColor("black")};
  border-radius: 100%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #1f1f1f;
  }
`;
