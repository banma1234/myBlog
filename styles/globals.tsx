import styled, { css, createGlobalStyle } from "styled-components";
import { Theme } from "styles/Theme";
import { ObjType } from "./globalsType";

export const Globals = {
  palette: {
    // 키 컬러
    $color_low: "#D3E3FC",
    $color_base: "#77A6F7",
    $color_high: "#4285F4",
    $color_pink: "#FFCCBC",
    $color_green: "#00887A",

    // 무채색
    $color_gray: "#f0f3f5",
    $color_black: "#262626",

    // 원색(쓸데가 있다)
    $color_og_white: "#fffff",
    $color_og_black: "#000000",
  },
};

export const GlobalStyle = createGlobalStyle<{
  theme: Theme;
}>`
  body {
    transition: 0.3s;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.fontColor};
    color-scheme: ${props => props.theme.type};
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.fontColor};
      border-radius: 0.8rem;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
  };

  [class*='cardStyle__StyledCard'] {
    transition: 0.3s;
    background-color: ${props => props.theme.cardColor};
    color: ${props => props.theme.fontColor};
  };

  [class*='hashTagStyle__HashTagBox'] {
    transition: 0.3s;
    background-color: ${props => props.theme.cardColor};
    color: ${props => props.theme.fontColor};
  }

  [class*='inputStyle__StyledInput'] {
    transition: 0.3s;
    background-color: ${props => props.theme.cardColor};
    color: ${props => props.theme.fontColor};
  }

  [class*='textBoxStyle__StyledTextBox'] {
    transition: 0.3s;
    background-color: ${props => props.theme.cardColor};
    color: ${props => props.theme.fontColor};
  }
`;

export const CardLayout = styled.div`
  display: grid;
  padding: 1rem;
  margin-top: -2rem;
  margin-bottom: 8rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media all and (max-width: 935px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.div.attrs(props => ({}))<any>`
  ${props => {
    const width: ObjType = {
      profile: "300px",
      profile_big: "160px",
      banner: "935px",
    };
    return css`
      position: relative;
      width: ${width[props.type]}
      margin: 0 auto;
      margin-top: ${props.type == "banner" ? "-2rem" : "0"};
      margin-bottom: ${props.type == "banner" ? "5.5rem" : "0"};
      border-radius: ${props.type == "banner" ? "0" : "100%"};
      overflow: hidden;
      @media all and (max-width: 935px) {
        display: ${props.type == "profile" ? "block" : "none"}
      } ;
    `;
  }};
`;

export const OverlapDiv = styled.div`
  position: absolute;
  top: 85%;
  left: 375px;
  transform: translate(50% 50%);
  z-index: 9990;
`;

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  row-gap: 10rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const FlexEndComponent = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const AddCommentBox = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 100%;
  align-items: none;
`;
