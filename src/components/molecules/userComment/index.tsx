import UserCommentComponent from "./usercomment";
import { UserCommentType } from "./userCommentType";

const UserComment: React.FC<UserCommentType> = (props: UserCommentType) => (
  <UserCommentComponent {...props} />
);

export default UserComment;
