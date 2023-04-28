import styled, { css } from "styled-components";
import { useColor } from "util/hooks";
import { CardType, ObjType } from "./cardType";
import localstorage from "util/localstorage";

export const StyledCard = styled.div.attrs(props => ({}))<CardType>`
  ${props => {
    const height: ObjType = { default: "300px", login: "700px" };
    const darkmode = localstorage("darkmode");
    const temp = props.type;

    return css`
      background-color: ${props => props.theme.cardColor};
      color: ${props => props.theme.fontColor};
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
        margin: 5;
      }
      @media all and (max-width: 670px) {
        width: 380px;
        height: 400px;
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
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
`;

export const TitleBox = styled.div`
  line-height: 1.2rem;
  height: 2.4rem;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  word-wrap: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  @media all and (max-width: 670px) {
    font-size: 1.2rem;
    height: 2.6rem;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.85rem;
  @media all and (max-width: 670px) {
    font-size: 1rem;
  }
`;
