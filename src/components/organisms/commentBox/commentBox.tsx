import {
  CommentContainer,
  UserComment,
  Content,
  CommentDate,
} from "./commentBoxStyle";
import { CommentBoxType } from "./commentBoxType";
import { Button } from "src/components/atoms";

const CommentBoxComponent: React.FC<CommentBoxType> = (
  props: CommentBoxType,
) => {
  let comments = props.data;
  let temp: any = [];
  return (
    <CommentContainer>
      {comments &&
        comments.map((item: any) => {
          return (
            <>
              <UserComment level={item.RE_LEVEL * 5}>
                {item.writter}
                <Content>{item.content}</Content>
                <CommentDate>{item.date}</CommentDate>
              </UserComment>
            </>
          );
        })}
      {props.children}
    </CommentContainer>
  );
};

export default CommentBoxComponent;
