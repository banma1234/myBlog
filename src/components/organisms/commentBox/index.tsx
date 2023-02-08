import { CommentBoxType } from './commentBoxType';
import CommentBoxComponent from './commentBox';

const CommentBox: React.FC<CommentBoxType> = props => <CommentBoxComponent {...props} />

export default CommentBox;