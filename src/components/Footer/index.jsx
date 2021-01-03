import React from 'react';
import { StyledFooter } from '../../styles/styled_footer';
import strings from './language'

const Footer = ({ language }) => {
	return (
		<StyledFooter className="footer">
			<div className="footer__copyright">
				<span>{strings[language].copyright}</span>
			</div>
		</StyledFooter>
	)
}

export default Footer
