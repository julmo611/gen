import React from 'react';
import dots from '../assets/dots.png';
import sarah from '../assets/sarah.png';
import jesse from '../assets/Jesse.png';
import aadila from '../assets/Aaidila.png';
import micki from '../assets/Micki.png';
import mason from '../assets/Mason.png';
import elipseright from '../assets/section-five-right.png';
import elipseLeft from '../assets/section-five-left.png';
import ReactPlayer from 'react-player';

export default function Meet_the_team() {
	return (
		<section className="meetTheTeam-section" id="team">
			<img src={elipseright} alt="Backgound" className="backRightThree" />
			<img src={elipseLeft} alt="Backgound" className="backLeftThree" />
			<div className="dotsContainer">
				<img src={dots} alt="Dots image" />
			</div>
			<div className="containerOne">
				<h2>
					Meet <strong>the TEAM</strong>
				</h2>
				<p>
					We come with 40+ years of combined experience and have surrounded
					ourselves with a talented team of Web3 creative, marketing and
					technology experts and hand-picked our female artist to create our
					collection of Latchkey Kids (young goats = kids...get it?).
				</p>
			</div>
			<div className="containerTwo">
				<div className="profileOne">
					<div className="profImage">
						<img src={sarah} alt="Sarah Monson" />
					</div>
					<div className="textContainer">
						<h4>Sarah Monson (est. 1977)</h4>
						<h5>Founder</h5>
						<p>
							After working on multiple premiere Emmy winning reality television
							programs, Sarah spent the last decade writing for the highest
							profile international advertising, across Super Bowl ads and
							global Fortune 100 commercials, as well as crafting music videos
							for several Grammy winning mega artists.
						</p>
					</div>
				</div>
				<div className="profileTwo">
					<div className="profImage">
						<img src={jesse} alt="Jesse Rosenblatt" />
					</div>
					<div className="textContainer">
						<h4>Jesse Rosenblatt (est. 1975)</h4>
						<h5>COO</h5>
						<p>
							Jesse has spent the last 20+ years as a top entertainment/media
							company executive and business/legal affairs consultant, having
							concluded complex deals with nearly every major entertainment,
							media and tech company worldwide.
							<span></span>
						</p>
					</div>
				</div>
			</div>
			<div className="containerThree">
				<div className="textContainer">
					<p>
						We're passionate about Gen-X because it's who we are. This project
						is so much more to us than just cool artwork. We're invested in
						education, and our mission is to help onboard millions of Gen-Xers
						into Web3 in ways that feel easy, safe, comfortable – and most
						important, fun.
					</p>
				</div>
				<div className="videoImage">
					<ReactPlayer url="https://youtu.be/430TEl_x8gY" />
				</div>
			</div>
			<div className="containerFour">
				<div className="profileOne">
					<div className="profImage">
						<img src={aadila} alt="Aâdila Bendahou" />
					</div>
					<div className="textContainer">
						<h4>Aâdila Bendahou (est. 1998)</h4>
						<h5>Artist</h5>
						<p>
							Aâdila is a Software Engineer and Web3 enthusiast living in
							Morocco. She's drawn to the limitless possibilities that digital
							tools offer, as the perfect blend of art and technology.
						</p>
					</div>
				</div>
				<div className="profileTwo">
					<div className="profImage">
						<img src={micki} alt="Micki" />
					</div>
					<div className="textContainer">
						<h4>Micki Boas (est. 1974)</h4>
						<h5>Advisor</h5>
						<p>
							Micki is a marketing consultant, driving radical success across
							various sectors, among startups and world-class clients (including
							VaynerMedia, Microsoft, and Nike).
						</p>
					</div>
				</div>
				<div className="profileThree">
					<div className="profImage">
						<img src={mason} alt="Mason" />
					</div>
					<div className="textContainer">
						<h4>Mason</h4>
						<h5>Mint Site & Smart Contracts</h5>
						<p>
							<a
								href="https://madewithmason.com "
								target="_blank"
								rel="noopener noreferrer"
							>
								Mason
							</a>{' '}
							is a software studio based in NYC, working with creators to bring
							their projects to market. They've worked with brands LinksDAO,
							Crypto Packaged Goods, Aku, Floor, and more.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
