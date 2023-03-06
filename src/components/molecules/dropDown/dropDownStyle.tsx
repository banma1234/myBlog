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

export const LittleFormContainer = styled.div`
  padding: 0.5rem;
  height: 4rem;
  margin-top: 1.3rem;
  position: absolute;
  font-size: 14px;
  z-index: 99999999;
  background-color: ${useColor("black")};
  border: 1px solid ${useColor("gray")};
`;

export const FormLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  row-gap: 10rem;
  padding: 0.5rem;
`;
