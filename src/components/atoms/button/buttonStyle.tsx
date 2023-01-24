import styled, { css } from "styled-components";
import { useColor } from "util/hooks";
import { ButtonType, ObjType } from "./buttonType";

const StyledButton = styled.button.attrs(props => ({}))<ButtonType>`
  ${props => {
    const width: ObjType = { default: "80px", login: "100%" };
    const height: ObjType = { default: "45px", login: "45px" };

    const typeHandler = props.type;
    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color == "gray" || props.color == "og_white"
        ? "black"
        : "white"};
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
