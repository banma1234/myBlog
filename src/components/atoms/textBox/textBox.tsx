import StyledTextBox from './textBoxStyle';
import { TextBoxType } from './textBoxType';

const TextBoxComponent: React.FC<TextBoxType> = (props: TextBoxType) => {
    return(
        <StyledTextBox {...props}>
            {props.children}
        </StyledTextBox>
    );
}

export default TextBoxComponent;