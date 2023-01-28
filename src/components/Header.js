import React from 'react';
import generation from '../assets/our-generation.png';
import asFeatured from '../assets/As-featured-on.png';
import pacman from '../assets/Pacman-group.png';
import backRight from '../assets/section-one-right.png';
import backLeft from '../assets/section-one-left.png';
import NavBar from './Navigation';

export default function Header() {
	return (
		<div className="header">
			<img src={backRight} alt="Backgound" className="backRight" />
			<img src={backLeft} alt="Backgound" className="backLeft" />
			<NavBar />
			<div className="titleBox">
				<h1>The NFT Community</h1>
				<h1>
					For
					<img src={generation} alt="Our Generarion" />
				</h1>
			</div>
			<p>
				Gen-X is a <strong>community</strong> for those of us who won't be left
				behind this time. Our retro pop culture <strong>collectibles</strong>{' '}
				double as your <strong>membership</strong> to an online and IRL
				community powered by nostalgia and a love of the 80s. Learn some mad
				Web3 skills, score some choice art, and have a blast with the{' '}
				<strong>Gen-X</strong> universe.
			</p>
			<div className="buttonContainer">
				<a
					href="https://mint.genxnfts.xyz/"
					target="_blank"
					rel="noopener noreferrer"
					className="orangeButton"
				>
					Mint A VIP Now
				</a>
			</div>
			<div className="asFeatured">
				<img src={asFeatured} alt="As Featured image" />
			</div>
			<div className="pacmanGroup">
				<img src={pacman} alt="Pacman" />
			</div>
		</div>
	);
}
