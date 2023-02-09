import { CommentContainer, UserComment, Content, CommentDate } from './commentBoxStyle';
import { CommentBoxType } from './commentBoxType';

const CommentBoxComponent: React.FC<CommentBoxType> =( props: CommentBoxType) => {
    let comments = props.data;
    return(
        <CommentContainer>
            { comments && comments.map((item: any) => {
                return(
                    <UserComment>
                        <Content>{item.content}</Content>
                        <CommentDate>{item.date}</CommentDate>
                    </UserComment>
                )
            }) }
            {props.children}
        </CommentContainer>
    );
}

export default CommentBoxComponent;