import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter.png';
import youtube from '../assets/Youtube.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord.png';
import tiktok from '../assets/Tiktok.png';
import linkedin from '../assets/linkedin.png';
import opensea from '../assets/Opensea.png';
import logo from '../assets/Logo.png';

export default function Navigation() {
	return (
		<div className="navbar">
			<div className="logo-container">
				<a href="/">
					<img src={logo} alt="Logo GENX NFTs" />
				</a>
			</div>
			<div className="linksNav">
				<Link to="/">Home</Link>
				<a href="/join">Join</a>
				<a href="/learn">Learn</a>
				<a href="/subscribe">Subscribe</a>
			</div>
			<div className="socialLinks">
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
	);
}
