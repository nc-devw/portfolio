import styled from 'styled-components'

export const StyledContact = styled.section`
	display: flex;
	flex-direction: column;
	padding: 2em 0;

	h3 {
		text-transform: uppercase;
		font-size: 2em;
	}

	.contact__form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1em 1em;
		margin: .5em 0 0 0;
		border-radius: 1em;
	}

	.contact__form-control {
		margin: .5em .5em;
	}

	.contact__form-control input, textarea {
		width: 100%;
		height: 60px;
		padding: 1em 1.5em;
		margin: .5em 0;
		border: 3px solid var(--clr-primary-2);
		border-radius: 30px;
		line-height: 1.6;
		outline: none;
	}

	textarea {
		resize: none;
		height: 150px;
	}
`