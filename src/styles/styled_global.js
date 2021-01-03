import styled, { createGlobalStyle } from 'styled-components'

export const StyledGlobal = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		#home{
			color:  ${({ theme }) => theme.text};
		}
		#about{
			color:  ${({ theme }) => theme.text};
		}
		#projects{
			color:  ${({ theme }) => theme.text};
		}
		#contact{
			color:  ${({ theme }) => theme.text};
		}
	}
`

export const ButtonTop = styled.button`
	pointer-events: none;
	opacity: 0;
	position: fixed;
	right: 50px;
	bottom: 50px;
	border: 0;
	padding: 1em;
	background: var(--clr-primary);
	color: var(--clr-white);
	z-index: 80;
	transition: opacity .2s ease;
	border-radius: 999em;
	cursor: pointer;

	&:hover {
	background: var(--clr-primary);
	}

	svg {
	fill: var(--clr-white);
	width: 30px;
	height: 30px;
}
`

export const Button = styled.button`
		margin: 0 auto;
		border-radius: 30px;
		font-size: 16px;
		font-weight: 700;
		overflow: hidden;
		line-height: 1;
		padding: 12px 32px;
		border: 2px solid var(--clr-primary);
		cursor: pointer;
		background: transparent;
		color: currentColor;

		&:hover {
			background-color: var(--clr-primary);
		}
`

export const Dropdown = styled.li`
	position: relative;
	padding-bottom: .8em;
	margin-bottom: -.8em;
	cursor: default;

	.dropdown-columns{
		columns: 3;
		column-rule: 1px solid #ccc;
		padding: 1em;

		li {
			break-inside: avoid;
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;

			a{ border-radius: .4em }
			&:last-of-type a { border-radius: .4em }
		}
	}

	&:hover > ul {
		display:block;
		list-style: none;
	}

	& > ul {
		display: none;
		min-width: 150px;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		padding-top: 1em;
		font-size: 0.9em;
		color: var(--clr-dark);
		background-color: var(--clr-white);
		box-shadow: 0 0 20px rgba(0,0,0,.7);
		border-radius: .4em;
		z-index: 10;

		&::before {
			content: '';
			width: 0px;
			height: 0px;
			position: absolute;
			top: -19px;
			left: 50%;
			transform: translateX(-50%);
			border: 10px solid transparent;
			border-bottom-color: var(--clr-white);
		}

		& li {
			margin: 0;
			width: 100%;
		
			&:last-of-type a {
				border-radius: 0 0 .3em .3em;
			}
		}


		a {
			text-align: center;
			display: block;
			width: 100%;
			padding: 1em 2em;
			text-decoration: none;
			color: currentColor;

			&:hover {
				background-color: var(--clr-middle);
				color: var(--clr-white)
			}
		}

		.dropdown__first-name {
			color: var(--clr-primary);
			font-size: 1.3em;
			font-family: Poppins, Raleway, sans-serif;
			font-weight: 900;
			border-bottom: 1px solid #CCC;
			padding-bottom: .5em;
			margin-bottom: .5em !important;
			text-align: center;
		}
	}

`