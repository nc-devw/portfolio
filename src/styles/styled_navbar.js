import styled from 'styled-components'

export const StyledNavbar = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-around;
	background: var(--clr-dark);
	padding: 1.5em 0;
	box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
	z-index: 1;

	.navbar__logo {
		color: var(--clr-white)
	}

	.navbar__links {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style-type: none;
	}

	.navbar__links li svg {
		width: 30px;
		height: 30px;
		stroke: var(--clr-white);
		fill: var(--clr-white);
	}

	.navbar__links li {
		margin: 0 1em;
	}

	.navbar__links li a {
		text-decoration: none;
		color: var(--clr-white);
	}
`