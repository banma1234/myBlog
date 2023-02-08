import { TextBoxType } from './textBoxType';
import TextBoxComponent from './textBox';

const TextBox: React.FC<TextBoxType> = props => <TextBoxComponent {...props} />;

export default TextBox;