import React from 'react';
import './contact.css';

const Contact = () => {
	return (
		<section className="contact" id="contact">
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
				<div className="contact__form-control">
					<label>
						<input name="subject" placeholder="Subject" />
					</label>
				</div>
				<div className="contact__form-control textarea">
					<label>
						<textarea name="message" placeholder="Message"></textarea>
					</label>
				</div>
				<input className="contact__form-button" type="submit" value="Submit" />
			</form>
		</section>
	)
}

export default Contact
