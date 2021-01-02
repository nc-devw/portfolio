import styled from 'styled-components'

export const StyledAbout = styled.section`
	min-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2em 0;

	.about__title {
		text-align: left;
		text-transform: uppercase;
		margin: .5em 0;
		font-size: 2em;
		color: var(--clr-white)
	}

	.about__skills {
		display: flex;
		flex: 1;
		flex-shrink: 0;
		flex-wrap: wrap;
		margin: .5em 0;
		justify-content: center;
	}

	.about__skills span {
		margin: 0 1em;
	}

	.about__skills span svg {
		width: 100px;
		height: 100px;
		fill: var(--clr-middle)
	}

	.about__skills span svg:hover {
		width: 100px;
		height: 100px;
		fill: var(--clr-white)
	}
`