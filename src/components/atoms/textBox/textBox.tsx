import StyledTextBox from './textBoxStyle';
import { TextBoxType } from './textBoxType';

const TextBoxComponent: React.FC<TextBoxType> = (props: TextBoxType) => {
    return(
        <StyledTextBox {...props} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    );
}

export default TextBoxComponent;