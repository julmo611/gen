import React from 'react';
import start_me_up from '../assets/Start_Me_Up.png';
import newsletter from '../assets/Newsletter-icon.png';
import community from '../assets/Community-icon.png';
import wallet from '../assets/Wallet-icon.png';

export default function Start_Me_Up() {
	return (
		<section className="startMeUp-section">
			<div className="titleImage">
				<img src={start_me_up} alt="Start Me Up" />
			</div>
			<div className="subTitleStartMeUp">
				<h4>
					There are several ways for you to become a GOAT - We’ve made it easy
					for anyone to join our tribe in just a few clicks.
				</h4>
			</div>
			<div className="buttonsContainer">
				<div className="buttonBox">
					<a href="/subscribe" className="yellowButtonTwo">
						Sign Up
					</a>{' '}
					<p>
						for our newsletter to be the first to learn all the alpha / intel on
						the collection
					</p>
					<img src={newsletter} alt="Newsletter icon" />
				</div>
				<div className="buttonBox">
					<a href="/join" className="yellowButtonTwo">
						Join
					</a>{' '}
					<p>
						the community <span>(and have fun!)</span>
					</p>
					<img src={community} alt="Community icon" />
				</div>
				<div className="buttonBox">
					<p>On mint day,</p>

					<a
						href="https://mint.genxnfts.xyz"
						target="_blank"
						rel="noopener noreferrer"
						className="yellowButtonTwo"
					>
						Connect
					</a>
					<p>
						your digital wallet{' '}
						<span>(or just grab your credit card out of your real wallet)</span>
					</p>
					<img src={wallet} alt="Wallet icon" />
				</div>
			</div>
		</section>
	);
}
