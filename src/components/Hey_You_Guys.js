import React from 'react';
import Mtv from '../assets/MTV.png';
import papergame from '../assets/paper-game.png';
import backRightThree from '../assets/section-three-right.png';
import backLeftThree from '../assets/section-three-left.png';

export default function Hey_You_Guys() {
	return (
		<section className="hey-you-guys-section">
			<img src={backRightThree} alt="Backgound" className="backRightThree" />
			<img src={backLeftThree} alt="Backgound" className="backLeftThree" />
			<div className="imageBox">
				<img src={papergame} alt="Game image" />
			</div>
			<div className="half-col-container">
				<h2>HEYYY YOUUU GUYYYS!!!</h2>
				<p>
					The Metaverse is coming - and it doesn't care about you. It's made for
					people who were weaned on social media.
				</p>
			</div>
			<h2 className="raisedMTV">
				We were <img src={Mtv} alt="Raised by MTV image" />
			</h2>
			<h3>
				We are Gen-X – the small but <strong>mighty</strong> generation born
				between 1965 – 1980...
			</h3>
			<p className="bottomP">
				We wield the most cultural power, <strong>founded</strong> more than
				half of the start-up companies and businesses in America and{' '}
				<strong>created</strong> the freakin’ internet. Our music rocks, our
				movies rock, and our style rocks!
			</p>
		</section>
	);
}
