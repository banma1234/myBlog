import UserCommentComponent from "./userComment";
import { UserCommentType } from "./userCommentType";

const UserComment: React.FC<UserCommentType> = (props: UserCommentType) => (
  <UserCommentComponent {...props} />
);

export default UserComment;
