import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledTextBox = styled.textarea`
    width: 90%;
    padding: 5px;
    outline: none;
    background-color: ${useColor("gray")};  
`;

export default StyledTextBox;
