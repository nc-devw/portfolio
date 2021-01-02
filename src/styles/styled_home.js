import styled from 'styled-components'

export const StyledHome = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 80px);
	padding: 2em 0;
	
	.home__pic {
		width: 200px;
		height: 200px;
		border-radius: 99em;
		overflow: hidden;
	}

	.home__pic img {
		width: 100%;
		height: 100%;
	}

	.home__info {
		text-align: center;
		padding-top: .5em;
		text-transform: uppercase;
		color: var(--clr-white);
	}

	.home__info h3 {
		margin: 0;
		font-size: 4em;
	}

	.home__info span {
		margin: 0;
		font-size: 1.5em;
		font-weight: 700;
	}

	.home__info p {
		margin: 0;
		font-size: 1.2em;
		text-transform: none;
	}

	.home__info svg {
		width: 40px;
		height: 40px;
		color: var(--clr-middle);
	}

	.home__info svg:hover {
		color: var(--clr-white);
	}

	.home__info ul {
		margin-top: 1em;
		list-style: none;
		display: flex;
		justify-content: space-around;
	}

	.home__info ul li a {
		color: var(--clr-dark);
	}

	.home__info ul li a:hover {
		color: var(--clr-primary);
	}
`