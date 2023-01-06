import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default function Mailchimp() {
	const url =
		'//gmail.us14.list-manage.com/subscribe/post?u=e0c529fa54315ada5a49135a9&amp;id=6a99f59e07';

	const SimpleForm = () => <MailchimpSubscribe url={url} />;
	const CustomForm = () => (
		<MailchimpSubscribe
			url={url}
			render={({ subscribe, status, message }) => (
				<>
					<SimpleForm onSubmitted={(formData) => subscribe(formData)} />
					{status === 'sending' && (
						<div style={{ color: 'blue' }}>sending...</div>
					)}
					{status === 'error' && (
						<div
							style={{ color: 'red' }}
							dangerouslySetInnerHTML={{ __html: message }}
						/>
					)}
					{status === 'success' && (
						<div style={{ color: 'yellow' }}>YOU’RE IN!</div>
					)}
				</>
			)}
		/>
	);
	return (
		<div className="mailchimpS">
			<div className="mailchimpBox">{CustomForm()}</div>
		</div>
	);
}
