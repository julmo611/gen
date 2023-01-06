import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LearnConnectScore from '../components/LearnConnectScore';
import HeyYouGuys from '../components/Hey_You_Guys';
import Web3IsTheFuture from '../components/Web3_is_the_future';
import MeetTheTeam from '../components/Meet_the_team';
import Benefits from '../components/Benefits';
import StartMeUp from '../components/Start_Me_Up';
import SayHello from '../components/Say_hello';
import FAQ from '../components/FAQ';
import Remember from '../components/Remember';
import PopUpBox from '../components/PopUpBox';
import { useCookies } from 'react-cookie';

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [timePopUp, setTimePopUp] = useState(false);
	const [cookies, setCookie] = useCookies(['genx']);
	const [cookiesTwo, setCookieTwo] = useCookies(['genxtwo']);
	const [cookiesThree, setCookieThree] = useCookies(['genxthree']);
	const [cookiesFour, setCookieFour] = useCookies(['genxfour']);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	setTimeout(() => {
		setTimePopUp(true);
	}, 15000);

	useEffect(() => {
		if (cookies.genx === 'v1') {
			setCookieTwo('genxtwo', 'v2', { path: '/' });
		} else {
			setCookie('genx', 'v1', { path: '/' });
		}

		if (cookiesTwo.genxtwo === 'v2') {
			setCookieThree('genxthree', 'v3', { path: '/' });
		} else {
		}
		if (cookiesThree.genxthree === 'v3') {
			setCookieFour('genxfour', 'v4', { path: '/' });
		} else {
		}
	}, []);

	const hiddePopUp = cookiesFour.genxfour;

	return (
		<div className="App overlayImage">
			{loading ? (
				<div className="loader-container">
					<div className="spinner"></div>
				</div>
			) : (
				<>
					{hiddePopUp === 'v4' ? (
						''
					) : timePopUp ? (
						<span timePopUp={false}>
							<PopUpBox />
						</span>
					) : (
						''
					)}
					<div className="specaialBackg">
						<div className="contentWrap">
							<Header />
							<LearnConnectScore />
							<HeyYouGuys />
							<Web3IsTheFuture />
							<MeetTheTeam />
							<Benefits />
							<StartMeUp />
							<SayHello />
							<FAQ />
							<Remember />
						</div>
						<Footer />
					</div>{' '}
				</>
			)}
		</div>
	);
}
