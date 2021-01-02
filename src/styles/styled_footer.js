import styled from 'styled-components'

export const StyledFooter = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--clr-dark);
	padding: 1em 0;
	margin-top: 2em;

	.footer__links {
		display: flex;
		justify-content: space;
		align-items: center;
		list-style-type: none;
		margin-bottom: 1em;
	}

	.footer__links li {
		margin: 0 1em;
	}

	.footer__links li a {
		text-decoration: none;
		color: var(--clr-white);
	}

	.footer__copyright {
		color: var(--clr-white)
	}
`