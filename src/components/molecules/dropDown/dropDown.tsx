import { StyledDropDown, DropDownMenu } from "./dropDownStyle";
import { DropDownType } from "./dropDownType";
import { Input, Button } from "src/components/atoms";
import { useState } from "react";

const DropDownContainer: React.FC<DropDownType> = (props: DropDownType) => {
  let menu = props.children;
  const [password, setPassword] = useState("");
  const [click, isClick] = useState("true");
  return (
    <StyledDropDown>
      {menu &&
        menu.map((item: string, i: number) => {
          return (
            <DropDownMenu key={i} onClick={null}>
              {item}
            </DropDownMenu>
          );
        })}
    </StyledDropDown>
  );
};

const menuHandler = (i: number) => {
  switch (i) {
    case 0:
      alert("0번");
    case 1:
      alert("1번");
    case 2:
      alert("2번");
  }
};

export default DropDownContainer;
