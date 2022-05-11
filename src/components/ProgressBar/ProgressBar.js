import React from "react";
import { StyledFullBar, StyledProgress } from "./styles";

const ProgressBar = (props) => {
  return (
    <StyledFullBar mainBackground={props.mainBackground}>
      <StyledProgress
        background={props.background}
        progress={props.progress}
      ></StyledProgress>
    </StyledFullBar>
  );
};

export default ProgressBar;
