import { ButtonType } from "./buttonType";
import ButtonComponent from "./button";

const Button: React.FC<ButtonType> = props => <ButtonComponent {...props} />;

export default Button;
