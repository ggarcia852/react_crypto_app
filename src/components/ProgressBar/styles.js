import styled from "styled-components";

export const StyledFullBar = styled.div`
	max-width: 230px;
	background: #8A92B2;
	border-radius: 20px;
`;

export const StyledProgress = styled.div.attrs((props) => ({
	progress: `${props.progress}%`,
}))`
	height: 8px;
	border-radius: 20px;
	background:#474C77;
	width: ${(props) => props.progress};
`;


