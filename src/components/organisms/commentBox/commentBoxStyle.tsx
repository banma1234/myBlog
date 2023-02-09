import styled, { css } from "styled-components";
import { CommentBoxType } from './commentBoxType';
import { useColor } from "util/hooks";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  hr{
    width: 100%;
  }
`;

export const UserComment = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  background-color : ${useColor("gray")};
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 43rem;
`

export const CommentDate = styled.div`
  font-size: 13px;
`