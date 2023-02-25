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
import { UserComment, DropDown } from "src/components/molecules";
import { ImgWrapper } from "styles/globals";
import Image from "next/legacy/image";
import imgUrl from "public/testImg.jpg";
import { useState, useEffect } from "react";
import { useIcons } from "util/hooks";

const CommentBoxComponent: React.FC<CommentBoxType> = (
  props: CommentBoxType,
) => {
  let comments = props.data;
  const [replyClick, setReplyClick] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [commentId, setCommentId] = useState("");

  useEffect(() => {
    setReplyClick(false);
    setCommentId("");
  }, []);

  return (
    <StyledCommentBox>
      {comments &&
        comments.map((item: any, i: any) => {
          return (
            <CommentContainer key={i}>
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
                <CommentMenu>
                  <div
                    onClick={() => {
                      setCommentId(item._id);
                      setMenuClick(!menuClick);
                    }}
                  >
                    {menuClick && commentId == item._id
                      ? useIcons("cancel", "18")
                      : useIcons("menu", "18")}
                  </div>
                  {menuClick && commentId == item._id && (
                    <DropDown children={["댓글복사", "수정", "삭제"]} />
                  )}
                </CommentMenu>
                <CommentReply
                  onClick={() => {
                    setCommentId(item._id);
                    setReplyClick(!replyClick);
                  }}
                >
                  &nbsp;
                  {replyClick && commentId == item._id ? " 취소" : "답글달기"}
                </CommentReply>
                {replyClick && commentId == item._id && (
                  <UserComment
                    postName={props.postName}
                    data={item}
                    type="REPLY"
                  />
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
