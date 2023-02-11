import {
  CommentContainer,
  Comments,
  Content,
  CommentDate,
  CommentWritter,
  CommentMenu,
  Temp,
  CommentInfo,
} from "./commentBoxStyle";
import { CommentBoxType } from "./commentBoxType";
import { UserComment } from "src/components/molecules";
import { ImgWrapper } from "styles/globals";
import Image from "next/legacy/image";
import imgUrl from "public/testImg.jpg";
import { useState } from "react";
import { useIcons } from "util/hooks";

const CommentBoxComponent: React.FC<CommentBoxType> = (
  props: CommentBoxType,
) => {
  let comments = props.data;
  const [click, isClick] = useState(false);
  const [commentLevel, setCommentLevel] = useState([]);

  return (
    <CommentContainer>
      {comments &&
        comments.map((item: any) => {
          return (
            <>
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
              </Comments>
              {() => {
                if (click) {
                  return <UserComment data={item} level={null} type="reply" />;
                }
              }}
            </>
          );
        })}
      <UserComment data={props.data} level={null} type="default" />
    </CommentContainer>
  );
};

export default CommentBoxComponent;
