import styled, { css } from "styled-components";
import useColor from "../../../../util/hooks/useColor/useColor";
import { CardType, ObjType } from "./cardType";

const StyledCard = styled.div.attrs(props => ({}))<CardType>`
  ${props => {
    const width: ObjType = { default: "400px", login: "100%" };
    const height: ObjType = { default: "250px", login: "700px" };

    const temp = props.type;
    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color == "gray" || props.color == "og_white"
        ? "black"
        : "white"};
      width: ${width[temp]};
      height: ${height[temp]};
      border: none;
      padding: 5px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 10px;
    `;
  }};
`;

export default StyledCard;
