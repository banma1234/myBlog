import {
  StyledCommentBox,
  Comments,
  Content,
  CommentDate,
  CommentWritter,
  CommentReply,
  CommentMenu,
  Temp,
  CommentContainer,
  CommentInfo,
} from "./commentBoxStyle";
import { CommentBoxType } from "./commentBoxType";
import { UserComment } from "src/components/molecules";
import { ImgWrapper } from "styles/globals";
import Image from "next/legacy/image";
import imgUrl from "public/testImg.jpg";
import { useState, useEffect } from "react";
import { useIcons } from "util/hooks";

const CommentBoxComponent: React.FC<CommentBoxType> = (
  props: CommentBoxType,
) => {
  let comments = props.data;
  const [click, isClick] = useState(false);
  const [commentId, setCommentId] = useState("");

  useEffect(() => {
    isClick(false);
    setCommentId("");
  }, [])

  return (
    <StyledCommentBox>
      {comments &&
        comments.map((item: any, i: any) => {
          return (
            <CommentContainer key = {i}>
              <Comments level={item.RE_LEVEL * 6}>
                <Temp>
                  <ImgWrapper type="profile">
                    <Image src={imgUrl} alt="comment profile" priority />
                  </ImgWrapper>
                </Temp>
                <Content>
                  <CommentInfo>
                    <CommentWritter>{item.writter}</CommentWritter>
                    <CommentDate>{item.date}</CommentDate>
                  </CommentInfo>
                  {item.content}
                </Content>
                <CommentMenu>{useIcons("menu", "18")}</CommentMenu>
                <CommentReply onClick={() => {
                  setCommentId(item._id)
                  isClick(!click)
                }}>&nbsp;{ click && commentId == item._id ? " 취소" :  "답글달기" }</CommentReply>
                { click && commentId == item._id && (
                  <UserComment postName={props.postName} data={item} type="REPLY"/>
                )}
              </Comments>
            </CommentContainer>
          );
        })}
      <UserComment data={props.data} postName={props.postName} type="DEFAULT" />
    </StyledCommentBox>
  );
};

export default CommentBoxComponent;
