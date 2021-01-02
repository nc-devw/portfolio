import styled from 'styled-components'

export const StyledProjects = styled.section`

	display: flex;
	flex-direction: column;
	padding: 2em 0;
	color: var(--clr-white);

	.projects h3 {
		text-transform: uppercase;
		font-size: 2em;
		color: var(--clr-white);
	}

	.project {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--clr-dark-2);
		border-radius: 1em;
		padding: 2em;
		margin: .5em 0 2em 0;
	}

	.project:hover {
		transform: translateY(-5px);
	}

	.project__title {
		font-size: 1.5em;
		margin-bottom: .5em;
	}

	.project__detail {
		margin-bottom: .75em;
	}

	.project__buttons button {
		padding: .5em 1em;
		border-radius: 2em;
		border: none;
		background-color: var(--clr-middle);
		margin: 0 .5em;
	}

	.project__buttons button:hover {
		background-color: var(--clr-white);
	}
`