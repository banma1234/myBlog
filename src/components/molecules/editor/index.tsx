import { EditorProps } from "./editorType";
import { MDEditor } from "./editor";

const Editor = ({ ...props }: EditorProps) => {
  return <MDEditor {...props} />;
};

export default Editor;
