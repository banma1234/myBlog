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
      cursor: "pointer";
      position: relative;
      margin: 10px;
      transition: all 0.3s;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 7px 10px rgb(0 0 0 / 10%);
      height: ${height[temp]};
      width: 270px;
      @media all and (max-width: 1300px) {
        width: 270px;
      }
      @media all and (max-width: 935px) {
        width: 285px;
        margin: 5;
      }
      @media all and (max-width: 670px) {
        width: 400px;
        height: 350px;
      }
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
  @media all and (max-width: 670px) {
    height: 280px;
  }
`;

export const Post = styled.div`
  display:flex;
  flex-direction: column;
  padding: 10px;
`;

export const TitleBox = styled.div`
  height: 40px;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
