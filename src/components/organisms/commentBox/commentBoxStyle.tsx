import styled, { css } from "styled-components";
import { CommentBoxType, UserCommentType } from "./commentBoxType";
import { useColor } from "util/hooks";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 12rem;
  margin-bottom: 8rem;
  hr {
    width: 100%;
  }
`;

export const Comments = styled.button.attrs(props => ({}))<UserCommentType>`
  ${props => {
    const defaultColor = useColor("gray");
    return css`
      width: ${`${100 - props.level}%`};
      margin-bottom: 1rem;
      padding: 1.5rem;
      display: grid;
      grid-template-columns: 90px 1fr 70px;
      border: solid;
      border-width: 2px 0 0 0;
      border-color: ${defaultColor};
      background-color: ${props.level == 0 ? "inherit" : defaultColor};
      text-align: left;
    `;
  }};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  column-gap: 4rem;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 0.8rem;
`;

export const CommentWritter = styled.div`
  font-weight: 900;
  font-size: 1rem;
  padding-right: 1rem;
`;

export const CommentDate = styled.div`
  font-size: 13px;
`;

export const CommentMenu = styled.div`
  min-width: 20px;
  display: flex;
  justify-content: right;
  cursor: pointer;
`;

export const Temp = styled.div`
  width: 70px;
`;
