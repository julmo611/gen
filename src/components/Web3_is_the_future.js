import React from 'react';
import web3IsTheFuture from '../assets/web3isthefuture.png';
import mcfly from '../assets/mcfly.png';
import docBrown from '../assets/doc.png';
import elipseright from '../assets/ElipseBKG-four-right.png';
import elipseLeft from '../assets/ElipseBKG-four-left.png';

export default function Web3_is_the_future() {
	return (
		<section className="web3IsTheFuture">
			<img src={elipseright} alt="Backgound" className="backRightThree" />
			<img src={elipseLeft} alt="Backgound" className="backLeftThree" />
			<div className="imagesContainer">
				<div className="docBrown">
					<img src={docBrown} alt="Doctor Brown" />
				</div>
				<div className="btfImage">
					<img src={web3IsTheFuture} alt="Web3 is the Future" />
				</div>
				<div className="mcfly">
					<img src={mcfly} alt="McFly" />
				</div>
			</div>
			<h2>Remember Back to the Future? Well, that's kinda like us.</h2>
			<p>
				We'll fly that DeLorean back to the 80s, and pick up digital parodies of
				your fav musicians, stars, and possibly your{' '}
				<strong>high school crush</strong>, decked out in everything from
				oversized shoulder pads to pocket protectors and rocking everything from{' '}
				<strong>mohawks to mixtapes</strong>.
			</p>
			<p>
				Then we'll fast forward in time to the amazing digital world of Web3,
				where things are really happen’en.
			</p>
			<p>
				With your flight of <strong>boy band posters</strong> and maybe a{' '}
				<strong>boombox</strong> in tow, you'll open the door to a ton of
				totally tubular online and IRL edutainment events, where you’ll learn
				Web3 at your own speed, in a space with other 80s kids and pop culture
				lovers that doesn’t feel like you’re stuck in detention.
			</p>
			<div className="buttonContainer">
				<a href="https://mint.genxnfts.xyz" className="orangeButton">
					I'm down! Let's do this!
				</a>
			</div>
		</section>
	);
}
