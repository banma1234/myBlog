import styled, { css } from "styled-components";
import { useColor } from "util/hooks";
import { CardType, ObjType } from "./cardType";

export const StyledCard = styled.div.attrs(props => ({}))<CardType>`
  ${props => {
    const width: ObjType = { default: "90%", login: "400px" };
    const height: ObjType = { default: "300px", login: "700px" };

    const temp = props.type;
    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color == "gray" ||
      props.color == "og_white" ||
      props.color == "low"
        ? "black"
        : "white"};
      width: ${width[temp]};
      height: ${height[temp]};
      cursor: "pointer";
      position: relative;
      margin: 10px;
      transition: all 0.3s;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 7px 10px rgb(0 0 0 / 10%);
      @keyframes cardUp {
        0% {
          top: 0;
        }
        50% {
          top: -0.5rem;
        }
        100% {
          top: 0;
        }
      }
      &:hover {
        position: relative;
        animation: cardUp 0.6s;
      }
    `;
  }};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Post = styled.div`
  display: flex;
  padding: 10px;
  margin-top: -1.5rem;
  justify-content: space-between;
`;
