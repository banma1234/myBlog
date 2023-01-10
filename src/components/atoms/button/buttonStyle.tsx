import styled, { css } from "styled-components";
import useColor from "../../../../util/hooks/useColor/useColor";
import { ButtonType, ObjType } from "./buttonType";

const StyledButton = styled.button.attrs(props => ({}))<ButtonType>`
  ${props => {
    const width: ObjType = { default: "80px", login: "100%" };
    const height: ObjType = { default: "45px", login: "45px" };

    const typeHandler = props.type;
    return css`
      background-color: ${useColor(props.color)};
      color: ${
        props.color == "gray" || props.color == "og_white" ? "black" : "white"
      };
      width: ${width[typeHandler]};
      height: ${height[typeHandler]};
      border: none;
      padding: 5px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 10px;
      transition: {
        transition-duration: 0.2s, 0.2s;
        transition-delay: 0s, 0s;
        transition-property: color, background-color: ${useColor("green")};
      }
    `;
  }};
`;

export default StyledButton;
