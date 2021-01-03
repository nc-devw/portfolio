import styled from 'styled-components'

export const StyledProjects = styled.section`

	display: flex;
	flex-direction: column;
	padding: 2em 0;
	color: var(--clr-white);

	h3 {
		text-transform: uppercase;
		font-size: 2em;
		margin-bottom: .5em;
	}

	.project {
		width: 100%;
		display: flex;
		flex-direction: column;
		border-radius: 1em;
		padding: 2em;
		margin: .5em 0 2em 0;
	}

	.project__title {
		font-size: 1.5em;
		margin-bottom: .5em;
	}

	.project__detail {
		margin-bottom: .75em;
	}

	.project__buttons > button + button{
		margin-left: 1em;
	}
`