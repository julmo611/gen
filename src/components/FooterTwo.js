import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord.png';
import tiktok from '../assets/Tiktok.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/Youtube.png';
import opensea from '../assets/Opensea.png';
import footerBackg from '../assets/footer-background.png';
import logo from '../assets/Logo.png';
import rarity from '../assets/Rariry-sniper.png';
import calendar from '../assets/NFT-calendar-white.svg';
import Mailchimp from './MailchimpFormContainer';

export default function FooterTwo() {
	return (
		<footer>
			<h2>
				Stay <strong>Gold</strong> <span>(and Connected)</span>
			</h2>
			<div className="bottomContainer">
				<div className="linksNav">
					<Link to="/">Home</Link>
					<a href="/join">Join</a>
					<a href="/learn">Learn</a>
					<a href="/subscribe">Subscribe</a>
				</div>
				<Mailchimp />
				<div className="fSocialMedia">
					<a
						href="https://twitter.com/GENxNFTs"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={twitter} alt="Twitter icon" />
					</a>
					<a
						href="https://discord.gg/genxnfts"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={discord} alt="Discord icon" />
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
					<a
						href="https://opensea.io/GenXOfficial"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={opensea} alt="Opensea icon" />
					</a>
				</div>
			</div>
			<div className="footerLogoContainer">
				<img src={logo} alt="GEN-X NFTS Logo" />
			</div>
			<div className="footerNavigation">
				<Link to="/Privacy-Policy">Privacy Policy</Link>
				<Link to="/official-rules">Official Rules</Link>
				<Link to="/terms-and-conditions">Terms and Conditions</Link>
				<Link to="/nftterms">NFT Terms</Link>
			</div>
			<div className="footerLogosLinks">
				<a
					href="https://raritysniper.com/nft-drops-calendar"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={rarity} alt="Rarity Snaiper logo" />
				</a>
				<a
					href="https://nftcalendar.io/event/gen-x-nfts-the-vip/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={calendar} alt="NFT Calendar logo" />
				</a>
			</div>
			<h5>
				<a
					href="https://webdesignpilot.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Designed by Web Design Pilot
				</a>
			</h5>
			<h5>Copyright © 2022 Core Memories, LLC. All Rights Reserved.</h5>
			<h6>8 The Green, STE B, Dover, DE 19901</h6>
			<img src={footerBackg} alt="Elipse" className="elipseBackground" />
		</footer>
	);
}
