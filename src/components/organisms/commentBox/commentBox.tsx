import { CommentContainer } from './commentBoxStyle';
import { CommentBoxType } from './commentBoxType';
import { TextBox } from 'src/components/atoms';

const CommentBoxComponent: React.FC<CommentBoxType> =( props: CommentBoxType) => {
    return(
        <CommentContainer>
            <TextBox>{props.children}</TextBox>
        </CommentContainer>
    );
}

export default CommentBoxComponent;