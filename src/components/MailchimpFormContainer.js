import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import InputField from '../components/InputField';

const CustomForm = ({ status, message, onValidated }) => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		email &&
			email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: email,
			});
	};

	useEffect(() => {
		if (status === 'success') clearFields();
	}, [status]);

	const clearFields = () => {
		setEmail('');
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<h3>{status === 'success' ? 'YOU’RE IN!' : ''}</h3>
			<div className="mailchimpS">
				{status === 'sending' && <div>sending...</div>}
				{status === 'error' && (
					<div dangerouslySetInnerHTML={{ __html: message }} />
				)}
				{status === 'success' && (
					<div dangerouslySetInnerHTML={{ __html: message }} />
				)}
				<div className="mailchimpBox">
					{status !== 'success' ? (
						<InputField
							label=""
							onChangeHandler={setEmail}
							type="email"
							value={email}
							placeholder="Your email address"
							isRequired
						/>
					) : null}

					{/*Close button appears if form was successfully sent*/}
					{status === 'success' ? (
						''
					) : (
						<InputField label="subscribe" type="submit" formValues={[email]} />
					)}
				</div>
			</div>
		</form>
	);
};

const MailchimpForm = () => {
	const url =
		'//gmail.us14.list-manage.com/subscribe/post?u=e0c529fa54315ada5a49135a9&amp;id=6a99f59e07';

	return (
		<div>
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				)}
			/>
		</div>
	);
};

export default MailchimpForm;
