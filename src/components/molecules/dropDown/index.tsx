import { DropDownType } from "./dropDownType";
import DropDownContainer from "./dropDown";

const DropDown: React.FC<DropDownType> = props => (
  <DropDownContainer {...props} />
);

export default DropDown;
