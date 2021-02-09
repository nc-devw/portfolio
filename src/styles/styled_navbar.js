import styled from 'styled-components'

export const StyledNavbar = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: var(--clr-dark);
	padding: 1.5em 0;
	box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
	z-index: 1;

	.navbar__logo {
		flex-basis: 300px;
		font-size: 1.25em;
		padding-left: 1em;
		color: var(--clr-white);
		cursor: pointer;
		transition: color .25s ease;
		&:hover{
			color: var(--clr-primary);
		}
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
			a {
				text-decoration: none;
				color: var(--clr-white);
				cursor: pointer;
				transition: color .25s ease;

				&:hover{
					color: var(--clr-primary);
				}
			}
		}
	}

	.navbar__options {
		color: var(--clr-white);
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-basis: 300px;
		padding-right: 1em;
		svg{
			width: 1.5em;
			height: 1.5em;
		}
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
			.cv {
				display: flex;
				flex-direction: row;
				font-size: 1.2em;
				color: var(--clr-primary);
				text-decoration: none;
				
				&:hover {
					color: var(--clr-white);
				}
			}
		}


		li:hover { color: var(--clr-primary); }

		button {
			background: none;
			border: none;
			color: inherit;
			font: inherit;
		}
	}

	@media(max-width: 850px){
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.navbar__logo{
			margin-bottom: 1em;
			flex-basis: 0;
		}
		.navbar__options{
			margin-top: 1.5em;
			flex-basis: 0;
		}
	}
`