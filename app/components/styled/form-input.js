import styled from 'ember-styled-components';

export default styled.input`
	margin: 0;
	color: ${props => props.inputColor || '#000'};
	background: ${props => props.bgColor || '#fff'};
	border-radius: 4px;
	width: 100%;
	padding: 10px;
	border: 1px solid #dedede;
	box-sizing: border-box;
	font-size: 15px;
	margin-bottom: 15px;

	&::placeholder {
		color: ${props => props.placeholderTextColor || '#aaa'};
	}
`;