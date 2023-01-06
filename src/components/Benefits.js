import React from 'react';
import benefits from '../assets/Benefits.png';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import six from '../assets/six.png';
import elipseright from '../assets/section-six-right.png';
import elipseLeft from '../assets/section-six-left.png';

export default function Benefits() {
	return (
		<section className="benefitsSection" id="benefits">
			<img src={elipseright} alt="Backgound" className="backRightSix" />
			<img src={elipseLeft} alt="Backgound" className="backLeftSix" />
			<h2>
				<img src={benefits} alt="Benefits" /> you get
			</h2>
			<h3>as a GEN-X NFT holder include:</h3>
			<ul>
				<li>
					<div className="iconNumber">
						<img src={one} alt="Number one icon" />
					</div>
					<p>
						Ownership of digital collectible art that allows you to express your
						identity online, including personal and commercial rights so you can
						use and monetize the IP of your goat
					</p>
				</li>
				<li>
					<div className="iconNumber">
						<img src={two} alt="Number two icon" />
					</div>
					<p>
						Invitation to a community of like-minded collectors, many of whom
						share similar childhood experiences and core memories (and know what
						a Trapper Keeper, a Walkman or a Laserdisc player are)
					</p>
				</li>
				<li>
					<div className="iconNumber">
						<img src={three} alt="Number three icon" />
					</div>
					<p>
						Access to Web3 educational resources to help you stay ahead of the
						curve, including webinars and self-paced training
					</p>
				</li>
				<li>
					<div className="iconNumber">
						<img src={four} alt="Number four icon" />
					</div>
					<p>
						Chance to own completely hand drawn ultra-rare 1:1 (one-of-a-kind)
						collectibles that are parody throwbacks to epic 80s moments (there
						are one over 100 of these iconic NFTs in the whole collection)
					</p>
				</li>
				<li>
					<div className="iconNumber">
						<img src={five} alt="Number five icon" />
					</div>
					<p>
						Access to NFT “flights” of related iconic artwork (collecting them
						all might yield a special surprise!)
					</p>
				</li>
				<li>
					<div className="iconNumber">
						<img src={six} alt="Number six icon" />
					</div>
					<p>
						Your latchkey, found around every goat's neck, will open exclusive
						doors to fun online and IRL events, free airdrops, and early access
						to future mints of new NFT collections
					</p>
				</li>
			</ul>
		</section>
	);
}
