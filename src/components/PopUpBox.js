import React, { useState } from 'react';
import newsLetterImage from '../assets/subscribeImage.png';
import closeBtn from '../assets/BTN-Close.png';
import Mailchimp from './MailchimpFormContainer';

export default function PopUpBox() {
	const [bNone, setBnone] = useState(false);

	return (
		<div className={` ${bNone ? 'hiddePopUp' : ''} popUpFullContainer `}>
			<div className="popUpBox">
				<span
					onClick={() => {
						setBnone(!bNone);
					}}
				>
					<img src={closeBtn} alt="Close button" className="closeBtn" />
				</span>
				<div className="contentBox">
					<h3>Get Our</h3>
					<h2>Newsletter</h2>
					<p>Weekly 'zine to learn Web3 through the lens of 80s pop culture</p>
					<Mailchimp />
				</div>
				<div className="subsImage">
					<img src={newsLetterImage} alt="Subscribe" />
				</div>
			</div>
		</div>
	);
}
