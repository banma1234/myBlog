import styled, { css } from "styled-components";
import { useColor } from "util/hooks";
import { inputType } from "./inputType";

const StyledInput = styled.input.attrs(props => ({}))<inputType>`
  ${props => {
    const height = { default: "40px", small: "25px" };

    return css`
      display: flex;
      background-color: ${props => props.theme.cardColor};
      color: ${props => props.theme.fontColor};
      width: ${props.size == "small" ? "12rem" : "90%"};
      height: ${height[props.size]};
      border: none;
      border-radius: 0.3rem;
      padding: 10px;
      margin-right: 1rem;
      margin-bottom: -1rem;
      outline: none;
    `;
  }};
`;

export default StyledInput;
