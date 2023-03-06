import StyledButton from "./buttonStyle";
import { ButtonType } from "./buttonType";

const ButtonComponent: React.FC<ButtonType> = (props: ButtonType) => {
  return (
    <StyledButton {...props} color={props.color} ButtonType={props.ButtonType}>
      {props.children}
    </StyledButton>
  );
};

export default ButtonComponent;
