import styled from 'styled-components'

export const StyledContact = styled.section`
	display: flex;
	flex-direction: column;
	padding: 2em 0;
	color: var(--clr-white);

	h3 {
		text-transform: uppercase;
		font-size: 2em;
		color: var(--clr-white);
	}

	.contact__form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1.5em 1em;
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
		border-radius: 30px;
		line-height: 1.6;
		color: var(--clr-white);
		background-color: var(--clr-dark-2);
		border: 1px solid var(--clr-dark);
		outline: none;
	}

	.contact__form-button {
		margin: 0 auto;
		color: var(--clr-dark);
		border-radius: 30px;
		font-size: 16px;
		overflow: hidden;
		line-height: 1;
		padding: 12px 32px;
		background-color: var(--clr-middle);
		color: var(--clr-dark);
		border: none;
		cursor: pointer;
	}

	.contact__form-button:hover {
		background-color: var(--clr-white);
	}
`