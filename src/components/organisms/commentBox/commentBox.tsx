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
import user_root from "public/testImg.jpg";
import user_default from "public/default_profile.png";
import { useState, useEffect } from "react";
import { useIcons } from "util/hooks";
import { StaticImageData } from "next/legacy/image";

const CommentBoxComponent: React.FC<CommentBoxType> = (
  props: CommentBoxType,
) => {
  let comments = props.data;
  const [replyClick, setReplyClick] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [commentId, setCommentId] = useState("");

  const profileHandler = (USER_TYPE: string) => {
    switch (USER_TYPE) {
      case "USER_ROOT":
        return user_root;
      default:
        return user_default;
    }
  };

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
                    <Image
                      src={profileHandler(item.user_type)}
                      alt="comment profile"
                      priority
                    />
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
                    {useIcons("cancel", "18")}
                  </div>
                  {menuClick && commentId == item._id && (
                    <DropDown
                      type="form"
                      id={commentId}
                      children={["댓글복사", "수정", "삭제"]}
                    />
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
