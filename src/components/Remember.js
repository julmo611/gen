import React from 'react';
import theBreakfastClub from '../assets/The-Breakfast-Club.png';

export default function Remember() {
	return (
		<section className="andRemember-section">
			<h2>And remember...</h2>
			<p>Whether you were</p>
			<p className="shortPharagraph">
				a brain... an athlete... a basket case... a princess... or a criminal
			</p>
			<img src={theBreakfastClub} alt="The Breakfast Club" />
			<p>There's a place in Web3 for you.</p>
			<div className="buttonContainer">
				<a href="/join" className="yellowButton">
					Join the Club
				</a>
			</div>
		</section>
	);
}
