import React from "react";
import { InputBox, LabelBox } from "./StyledCheckBox";

const CheckBox = ({ indexId, disabled, checked, test }) => {
  const handleClick = e => {
    const target = e.target;
    if (target.readOnly) target.checked = target.readOnly = false;
    else if (!target.checked) target.readOnly = target.indeterminate = true;
  };

  return (
    <>
      <InputBox id={indexId} type="checkbox" disabled={disabled} defaultChecked={checked} onClick={e => handleClick(e)} />
      <LabelBox htmlFor={indexId}>checkbox {indexId}</LabelBox>
    </>
  );
};

export default CheckBox;
