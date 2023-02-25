import styled, { css } from "styled-components";
import { DropDownMenuType } from "./dropDownType";
import { useColor } from "util/hooks";

export const StyledDropDown = styled.div`
  margin-top: 1.3rem;
  padding: 0.3rem 1rem 0.3rem 1rem;
  list-style: none;
  position: absolute;
  border: 1px solid ${useColor("black")};
  background-color: ${useColor("gray")};
  font-size: 14px;
  z-index: 999999;
`;

export const DropDownMenu = styled.li<DropDownMenuType>`
  cursor: pointer;
`;
