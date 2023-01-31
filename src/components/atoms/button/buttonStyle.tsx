import styled, { css } from "styled-components";
import { useColor } from "util/hooks";
import { ButtonType, ObjType } from "./buttonType";

const StyledButton = styled.button.attrs(props => ({}))<ButtonType>`
  ${props => {
    const width: ObjType = { default: "200px", small: "80px", login: "100%" };
    const height: ObjType = { default: "50px", small: "45px", login: "50px" };

    const typeHandler = props.ButtonType;
    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color == "gray" || props.color == "og_white"
        ? "black"
        : "white"};
      font-size: 16px;
      width: ${width[typeHandler]};
      height: ${height[typeHandler]};
      border: none;
      padding: 5px 10px;
      margin-top: 10px;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 999999px;
    `;
  }};
`;

export default StyledButton;
