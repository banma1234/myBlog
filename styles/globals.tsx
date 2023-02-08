import styled, { css } from "styled-components";

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

export const CardLayout = styled.div`
  display: grid;
  padding: 1rem;
  margin-top: -2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media all and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media all and (max-width: 935px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.div.attrs(props => ({}))<any>`
  ${props => {
    return css`
      position: relative;
      width: ${props.type == "profile" ? "160px" : "935px"};
      margin: 0 auto;
      margin-top: ${props.type == "profile" ? "0" : "-2rem"};
      margin-bottom: ${props.type == "profile" ? "0" : "5.5rem"};
      border-radius: ${props.type == "profile" ? "100%" : "0"};
      overflow: hidden;
      @media all and (max-width: 935px) {
        display: none;
      } ;
    `;
  }};
`;

export const OverlapDiv = styled.div`
  position: absolute;
  top: 70%;
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
  margin: 1rem;
`;