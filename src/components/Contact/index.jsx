import React from 'react';
import { StyledContact } from '../../styles/styled_contact';

const Contact = () => {
	return (
		<StyledContact id="contact">
			<h3>Contact</h3>
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
				<input className="contact__form-button" type="submit" value="Submit" />
			</form>
		</StyledContact>
	)
}

export default Contact
