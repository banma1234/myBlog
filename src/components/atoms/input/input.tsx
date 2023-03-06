import StyledInput from "./inputStyle";

const InputComponent: React.FC<any> = props => {
  return (
    <StyledInput
      size={props.size}
      placeholder={props.placeholder}
      type={props.type}
      {...props}
    ></StyledInput>
  );
};

export default InputComponent;
