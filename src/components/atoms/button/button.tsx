import StyledButton from "./buttonStyle";

const ButtonComponent: React.FC<any> = (props, color: string) => {
  return (
    <StyledButton color={props.color} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default ButtonComponent;
