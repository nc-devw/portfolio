import React from 'react';
import { StyledContact } from '../../styles/styled_contact';
import strings from './language'
const Contact = ({ language }) => {
	return (
		<StyledContact id="contact">
			<h3>{strings[language].title}</h3>
			<form className="contact__form">
				<div className="contact__form-control">
					<label>
						<input name="name" placeholder="Your name" />
					</label>
				</div>
				<div className="contact__form-control">
					<label>
						<input name="email" placeholder="Email Address" />
					</label>
				</div>
				<div className="contact__form-control textarea">
					<label>
						<textarea name="message" placeholder="Message"></textarea>
					</label>
				</div>
				<input className="contact__form-button" type="submit" value={strings[language].submit} />
			</form>
		</StyledContact>
	)
}

export default Contact
