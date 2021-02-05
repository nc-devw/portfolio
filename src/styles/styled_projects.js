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
		justify-content: space-between;
		border-radius: 1em;
		padding: 0 2em;
		margin: .5em 0 2em 0;

		.project__info{
			flex: 1;
			margin-right: 1em;
		}

		.project__img{
			flex: 1;
			border: 2px solid var(--clr-primary);
			border-radius: 1em;
			overflow: hidden;
			transition: transform .2s ease;
			&:hover{
					transform: scale(1.05);
			}
			img {
				width: 100%;
				height: 100%;
			}

		}
		.quizme{
			border: none;
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
	}

	@media(max-width: 850px){
		h3{
			text-align: center;
		}
		.project{
			flex-direction: column;
			text-align: center;
			.project__buttons{
			margin: 1em 0;
		}
		}
	}
`