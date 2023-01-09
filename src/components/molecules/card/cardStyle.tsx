import styled, { css } from "styled-components";
import useColor from "../../../../util/hooks/useColor/useColor";
import { CardType } from "./cardType";

const StyledCard = styled.button.attrs(props => ({}))<CardType>`
  ${props => {
    const width = { default: "400px" };

    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color == "gray" || props.color == "og_white"
        ? "black"
        : "white"};
      background-repeat: no-repeat;
      width: 80px;
      height: 45px;
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
