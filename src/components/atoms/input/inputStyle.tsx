import styled, { css } from "styled-components";
import { inputType } from "./inputType";

const StyledInput = styled.input.attrs(props => ({}))<inputType>`
  ${props => {
    const height = { default: "40px", small: "25px" };

    return css`
      background-color: white;
      color: black;
      width: 100%;
      height: ${height[props.size]};
      border: none;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
    `;
  }};
`;

export default StyledInput;
