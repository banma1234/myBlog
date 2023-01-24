import StyledButton from "./buttonStyle";

const ButtonComponent: React.FC<any> = props => {
  return (
    <StyledButton {...props} color={props.color} type={props.type}>
      {props.children}
    </StyledButton>
  );
};

export default ButtonComponent;
