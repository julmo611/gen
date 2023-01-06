import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import PopUpBox from '../components/PopUpBox';

export default function NewsLetter() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader-container">
					<div className="spinner"></div>
				</div>
			) : (
				<>
					<div className="subscirbePage">
						<Navigation />
						<div className="popUpContainer">
							<PopUpBox />
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}
