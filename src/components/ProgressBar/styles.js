import styled from "styled-components";

export const StyledFullBar = styled.div.attrs((props) => ({
  style: {
	background: `${props.mainBackground}`,
  },
}))`
  min-width: 60px;
  max-width: 230px;
  border-radius: 20px;
`;

export const StyledProgress = styled.div.attrs((props) => ({
  progress: `${props.progress}%`,
  style: {
    background: `${props.background}`,
  },
}))`
  height: 8px;
  border-radius: 20px;
  width: ${(props) => props.progress};
`;
