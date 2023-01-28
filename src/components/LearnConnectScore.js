import React from 'react';
import book from '../assets/Book.png';
import connect from '../assets/connect.png';
import star from '../assets/star.png';
import backg from '../assets/backg-2-section-top.png';

export default function Learn_Connect_Stop() {
	return (
		<section className="lcs-section">
			<img src={backg} alt="Background" className="imgBack" />
			<h2>
				We often get left out of the conversation,{' '}
				<strong>but that stops NOW!</strong>
			</h2>

			<div className="boxContainer">
				<div className="learn">
					<img src={book} alt="Book icon" />
					<h3>LEARN </h3>
					<p>
						all about the next evolution of the internet and how it will affect
						our businesses and personal relationships.
					</p>
					<a href="/learn" className="callToAction">
						I’M INTRIGUED
					</a>
				</div>
				<div className="connect">
					<img src={connect} alt="Connect icon" />
					<h3>CONNECT</h3>
					<p>
						to a community of 80s kids and nostalgia lovers all on this journey
						together.
					</p>
					<a href="/join" className="callToAction">
						JOIN THE CLUB
					</a>
				</div>
				<div className="score">
					<img src={star} alt="Star icon" />
					<h3>SCORE</h3>
					<p>membership benefits just for hanging out with us.</p>
					<a
						href="https://mint.genxnfts.xyz/"
						target="_blank"
						rel="noopener noreferrer"
						className="callToAction"
					>
						LET’S DO THIS
					</a>
				</div>
			</div>
		</section>
	);
}
