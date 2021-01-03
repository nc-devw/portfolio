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
		img {
			width: 100%;
			height: 100%;
		}
	}

	.home__info {
		text-align: center;
		padding-top: .5em;
		text-transform: uppercase;
		h3 {
			margin: 0;
			font-size: 4em;
		}
		span {
			margin: 0;
			font-size: 1.5em;
			font-weight: 700;
		}
		p {
			margin: 0;
			font-size: 1.2em;
			text-transform: none;
		}

		ul {
			margin-top: 1em;
			list-style: none;
			display: flex;
			justify-content: space-around;
		}

		ul li a {
			color: currentColor;
			svg {
				width: 40px;
				height: 40px;
			}
			svg:hover {
				color: var(--clr-primary-2);
			}
		}

		ul li a:hover {
			color: var(--clr-primary);
		}

	}

`