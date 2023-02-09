import styled, { css } from "styled-components";
import { useColor } from "util/hooks";

const StyledTextBox = styled.textarea`
    width: 90%;
    height: 6rem;
    padding: 1rem;
    overflow: auto;
    outline: none;
    margin: 0 auto;
    background-color: ${useColor("gray")};  
`;

export default StyledTextBox;
