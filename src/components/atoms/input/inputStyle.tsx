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
      /* font-size: 1em;
    font-weight: 500; */
      border-radius: 5px;
    `;
  }};
`;

export default StyledInput;
