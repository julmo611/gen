import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navigation';
import NFTS from '../components/NFT101';

export default function Learn() {
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
					<div className="nfts101-page-content">
						<Navbar />
						<NFTS />
					</div>
					<Footer />
				</>
			)}
		</>
	);
}
