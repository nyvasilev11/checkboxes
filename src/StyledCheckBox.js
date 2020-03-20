import styled from "styled-components";
import checked from "./images/checked.svg";
import unchecked from "./images/unchecked.svg";
import halfChecked from "./images/checkbox_half.svg";

export const LabelBox = styled.label`
  position: relative;
  padding-left: 30px;
  margin-right: 10px;
  display: inline-block;
  height: 30px;
  line-height: 30px;

  &:before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background: url(${unchecked});
  }

  &:nth-of-type(2) {
    background: url(${halfChecked}) no-repeat;
  }

  &:nth-of-type() {
    background: url(${halfChecked}) no-repeat;
  }
`;

export const InputBox = styled.input`
  display: none;
  height: 20px;

  &:checked + ${LabelBox}:before {
    background: url(${checked});
  }

  &:disabled + ${LabelBox} {
    filter: opacity(50%);
  }

  &:disabled + ${LabelBox}:before {
    filter: opacity(50%);
  }

  &:indeterminate + ${LabelBox}:before {
    background: url(${halfChecked});
  }
`;
