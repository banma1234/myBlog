import styled from "styled-components";

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

export const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media all and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
