import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

export const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 3.2rem 1fr 12rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1100px 1fr;
  @media all and (max-width: 1100px) {
    grid-template-columns: 0% 100% 0%;
  }
`;

export const Article = styled.div`
  min-height: 50rem;
  padding-top: 2rem;
  a {
    &:hover {
      transition: all 0.3s;
      color: ${useColor("green")};
    }
  }
`;

export const Aside = styled.div`
  height: 100%;
`;
