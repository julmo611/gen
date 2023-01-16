import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="App overlayImage">
			<div className="extraPagesBack">
				<Navigation />
				<div className="contentWrapEx">
					<h1>GEN-X NFTS – NFT TERMS AND CONDITIONS</h1>
					<div className="textWrap">
						<p>Last revised: December 28, 2022</p>
						<p></p>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
