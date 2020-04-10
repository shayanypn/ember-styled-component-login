import styled from 'ember-styled-components';

export default styled.div`
	width: 100%;
	display: block;
	display: flex;
	justify-content: ${props => props.justifyContent || 'space-between'};
`;