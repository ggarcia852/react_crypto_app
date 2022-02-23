import React from "react";
import { StyledFullBar, StyledProgress } from "./styles";

const ProgressBar = (props) => {
  return (
    <>
    <StyledFullBar>
      <StyledProgress progress={props.progress}></StyledProgress>
    </StyledFullBar>
    </>
  );
};

export default ProgressBar;
