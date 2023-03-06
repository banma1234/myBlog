import TextBoxComponent from "./textBox";
import { TextBoxType } from "./textBoxType";

const TextBox: React.FC<TextBoxType> = (props: TextBoxType) => (
  <TextBoxComponent {...props} />
);

export default TextBox;
