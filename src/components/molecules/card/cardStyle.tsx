import styled, { css } from "styled-components";
import { useColor } from "util/hooks";
import { CardType, ObjType } from "./cardType";

export const StyledCard = styled.div.attrs(props => ({}))<CardType>`
  ${props => {
    const width: ObjType = { default: "250px", login: "400px" };
    const height: ObjType = { default: "300px", login: "700px" };

    const temp = props.type;
    return css`
      background-color: ${useColor(props.color)};
      color: ${props.color == "gray" ||
      props.color == "og_white" ||
      props.color == "low"
        ? "black"
        : "white"};
      width: 90%;
      height: ${height[temp]};
      cursor: "pointer";
      position: relative;
      margin: 10px;
      transition: all 0.3s;
      border-radius: 1rem;
      overflow: hidden;
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
