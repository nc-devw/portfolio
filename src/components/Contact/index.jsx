import React, { useState } from 'react';
import { StyledContact } from '../../styles/styled_contact';
import { Button } from '../../styles/styled_global';
import { useToasts } from 'react-toast-notifications'
import strings from './language'
import emailjs from 'emailjs-com'

const Contact = ({ language }) => {

	const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;

	const { addToast } = useToasts()

	const handleSubmit = (ev) => {
		ev.preventDefault();

		emailjs.sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, ev.target, REACT_APP_USER)
			.then((result) => {
				addToast(strings[language].success, {
					appearance: 'success'
				})
			}, (error) => {
				addToast(strings[language].error, {
					appearance: 'error'
				})
			});
		ev.target.reset();
	}

	return (
		<StyledContact id="contact">
			<h3>{strings[language].title}</h3>
			<form className="contact__form" onSubmit={handleSubmit}>
				<div className="contact__form-control">
					<label>
						<input type="text" name="name" placeholder="Your name" required />
					</label>
				</div>
				<div className="contact__form-control">
					<label>
						<input type="email" name="email" placeholder="Email Address" required />
					</label>
				</div>
				<div className="contact__form-control textarea">
					<label>
						<textarea name="message" placeholder="Message" required></textarea>
					</label>
				</div>
				<Button className="contact__form-button" type="submit">
					{strings[language].submit}
				</Button>
			</form>
		</StyledContact>
	)
}

export default Contact
