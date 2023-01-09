import StyledInput from "./inputStyle";

const InputComponent: React.FC<any> = props => {
  return <StyledInput size={props.size} {...props}></StyledInput>;
};

export default InputComponent;
