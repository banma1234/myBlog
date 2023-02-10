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

export const UserComment = styled.button.attrs(props => ({}))<UserCommentType>`
  ${props => {
    return css`
      width: ${`${100 - props.level}%`};
      margin-bottom: 1rem;
      padding: 1rem;
      display: flex;
      border: none;
      background-color: ${useColor("gray")};
      justify-content: space-between;
      text-align: left;
    `;
  }};
`;

export const Content = styled.div`
  width: 80%;
`;

export const CommentDate = styled.div`
  font-size: 13px;
`;
