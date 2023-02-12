import styled, { css } from "styled-components";
import { UserCommentType } from "./commentBoxType";
import { useColor } from "util/hooks";

export const StyledCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
  margin-bottom: 8rem;
  hr {
    width: 100%;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Comments = styled.div.attrs(props => ({}))<UserCommentType>`
  ${props => {
    const defaultColor = useColor("gray");
    return css`
      width: ${`${100 - props.level}%`};
      padding: 1.5rem 0 1.5rem 0;
      display: grid;
      grid-template-columns: 90px 1fr 70px;
      border: solid;
      border-width: 2px 0 0 0;
      border-color: ${defaultColor};
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
  color: ${useColor("green")};
  font-size: 13px;
`;

export const CommentReply = styled.p`
  color: ${useColor("green")};
  font-size: 15px;
  padding-top: 0.5rem;
  max-height: 1rem;
  cursor: pointer;
`

export const CommentMenu = styled.div`
  min-width: 20px;
  display: flex;
  justify-content: right;
  cursor: pointer;
`;

export const Temp = styled.div`
  width: 70px;
`;
