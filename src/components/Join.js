import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import oneUp from '../assets/1UP.png';
import discordWM from '../assets/Discord-watermark.png';
import thumbsUp from '../assets/thumbsUp.png';
import envelope from '../assets/Envelope.png';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter.png';
import youtube from '../assets/Youtube.png';
import instagram from '../assets/Instagram.png';
import tiktok from '../assets/Tiktok.png';
import linkedin from '../assets/linkedin.png';
import Mailchimp from './MailchimpFormContainer';
import FooterTwo from './FooterTwo';

export default function Join() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader-container">
					<div className="spinner"></div>
				</div>
			) : (
				<>
					<div className="becomeAGoat">
						<Navigation />
						<div className="titleContainer">
							<h1>Ways You Can</h1>
							<div className="titleBox">
								<h2>
									Become{' '}
									<span>
										<strong>A Goat</strong>
									</span>
								</h2>
							</div>
						</div>
						<div className="boxesContainer">
							<div className="joinD">
								<img src={discordWM} alt="Discord" className="wMark" />
								<h3>Join our</h3>
								<h2>DISCORD</h2>
								<div className="buttonBox">
									<a
										href="https://discord.gg/genxnfts"
										target="_blank"
										rel="noopener noreferrer"
									>
										I’M INTRIGUED
									</a>
								</div>
							</div>
							<div className="followUs">
								<img src={thumbsUp} alt="Thumbs Up" className="wMark" />
								<h3>Follow us on</h3>
								<h2>SOCIAL MEDIA</h2>
								<div className="followLinks">
									<a
										href="https://twitter.com/GENxNFTs"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={twitter} alt="Twitter icon" />
									</a>

									<a
										href="https://www.facebook.com/groups/nftweb3genxcommunity"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={facebook} alt="Facebook icon" />
									</a>
									<a
										href="https://www.tiktok.com/@genx_nfts"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={tiktok} alt="Tiktok icon" />
									</a>
									<a
										href="https://www.youtube.com/@genxnfts"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={youtube} alt="YouTube icon" />
									</a>
									<a
										href="https://www.instagram.com/genxnfts"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={instagram} alt="Instagram icon" />
									</a>
									<a
										href="https://www.linkedin.com/company/genxnfts"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={linkedin} alt="Linkedin icon" />
									</a>
								</div>
							</div>
							<div className="newsletterBox">
								<img src={envelope} alt="Envelope" className="wMark" />
								<h2>
									Get our <strong>NEWSLETTER</strong>
								</h2>
								<Mailchimp />
							</div>
						</div>
						<h2 className="oneUpSubt">
							And of course, <strong>buy a GEN-X NFT</strong>{' '}
							<a
								href=" https://www.premint.xyz/genxnfts/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={oneUp} alt="One Up" />
							</a>
						</h2>
					</div>
					<FooterTwo />
				</>
			)}
		</>
	);
}
