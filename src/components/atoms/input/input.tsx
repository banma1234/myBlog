import StyledInput from "./inputStyle";

const InputComponent: React.FC<any> = props => {
  return (
    <StyledInput
      size={props.size}
      placeholder={props.placeholder}
      {...props}
    ></StyledInput>
  );
};

export default InputComponent;
