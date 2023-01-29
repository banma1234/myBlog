import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

export const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 100% 12rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  margin-top: 2.5rem;
  @media all and (max-width: 1200px) {
    grid-template-columns: 0% 100% 0%;
  }
`;

export const Article = styled.div`
  height: 100%;
  padding: 2rem;
  background-color: ${useColor("gray")};
`;

export const Aside = styled.div`
  height: 100%;
`;
