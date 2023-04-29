import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

export const StyledNavBar = styled.div.attrs(props => ({}))<any>`
  ${props => {
    return css`
      width: 10rem;
      height: 25rem;
      padding: 10px;
      position: fixed;
      margin: 3rem 0 0 0.5rem;
      border: none;
      border-radius: 1rem;
      transition: 0.3s;
      overflow: hidden;
      background-color: ${props => props.theme.bgColor};
      &:hover {
        background-color: ${props => props.theme.cardColor};
        overflow: auto;
      }
      &::-webkit-scrollbar {
        width: 0.3rem;
      }
      &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.fontColor};
        border-radius: 0.8rem;
      }
      &::-webkit-scrollbar-track {
        background: none;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      @media all and (max-width: 1300px) {
        display: none;
      }
    `;
  }};
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
