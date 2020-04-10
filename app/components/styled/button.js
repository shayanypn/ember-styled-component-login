import styled from 'ember-styled-components';

export default styled.button`
	color: ${props => props.inputColor || '#fff'};
	font-size: 0.8em;
	padding: 0.7em 2em;
	border: 1px solid ${props => props.borderColor || '#8358cb'};
	border-radius: 3px;
	display: block;
	background: ${props => props.bgColor || '#8358cb'};
	cursor: pointer;
`;