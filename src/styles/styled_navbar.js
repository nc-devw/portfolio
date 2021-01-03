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

		li {
			margin: 0 1em;
			svg {
				width: 30px;
				height: 30px;
				stroke: var(--clr-white);
				fill: var(--clr-white);
				
			}
			button {
				background: transparent;
				border: none;
				font-size: 1em;
				color: var(--clr-white);
				cursor: pointer;
				&:focus {
					outline: none;
				}
			}
		}
	}



	.navbar__options {
			color: var(--clr-white);
			list-style: none;
			display: flex;
			align-items: center;
			flex-basis: 300px;

			& > li {
				position: relative;
			}

			& > li + li { margin-left: 3em; }

			li, li > button {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}

			li:hover { color: var(--clr-middle); }

			button {
				background: none;
				border: none;
				color: inherit;
				font: inherit;
			}
		}
`