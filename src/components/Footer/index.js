import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<nav className="footer">
			<ul className="footer__links">
				<li><a href="/#">Home</a></li>
				<li><a href="/#">About</a></li>
				<li><a href="/#">Projects</a></li>
			</ul>
			<div className="footer__copyright">
				<span>Made with ❤ by nc-devw</span>
			</div>
		</nav>
	)
}

export default Footer
