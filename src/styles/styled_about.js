import styled from 'styled-components'

export const StyledAbout = styled.section`
	min-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2em 0;

	h3 {
		text-transform: uppercase;
		font-size: 2em;
		margin-bottom: .5em;
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
		fill: var(--clr-middle);
		transition: all 0.25s ease;
	}
	#react svg:hover {
		fill: #61dafb;
	}

	#node svg:hover {
		fill: #43853d;
	}

	#js svg:hover {
		fill: #efd81d;
	}

	#redux svg:hover {
		fill: #7747bc;
	}

	#express svg:hover {
		fill: #1B1A1F;
		/* random */
	}

	#sequelize svg:hover {
		fill: #03afef;
	}

	#postgresql svg:hover {
		fill: #305e8b;
	}

	#mariadb svg:hover {
		fill: #005e86;
	}

	#bootstrap svg:hover {
		fill: #533b78;
	}

	#php svg:hover {
		fill: #7377ad;
		filter: saturate(2);
	}

	#laravel svg:hover {
		fill: #f72c1f;
	}

	
	@media(max-width: 850px){
		.about__skills span {
			margin: .5em 1em;
		}
	}

`