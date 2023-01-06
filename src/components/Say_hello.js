import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import oneImage from '../assets/1.png';
import twoImage from '../assets/2.png';
import threeImage from '../assets/3.png';
import fourImage from '../assets/4.png';
import fiveImage from '../assets/5.png';
import sixImage from '../assets/6.png';
import sevenImage from '../assets/7-1.png';
import eightImage from '../assets/8.png';

export default function Say_hello() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 8,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="sayHello-section" id="hello">
			<h2>
				SAY HELLO <strong className="strong">To My Little Frens</strong>
			</h2>
			<div className="carouselContainer">
				<Carousel
					responsive={responsive}
					swipeable={false}
					draggable={false}
					showDots={true}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
					// deviceType={deviceType}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					<div className="carouselImage">
						<img src={oneImage} alt="NFTS" />{' '}
					</div>
					<div className="carouselImage">
						<img src={twoImage} alt="NFTS" />
					</div>
					<div className="carouselImage">
						<img src={threeImage} alt="NFTS" />
					</div>
					<div className="carouselImage">
						<img src={fourImage} alt="NFTS" />
					</div>
					<div className="carouselImage">
						<img src={fiveImage} alt="NFTS" />
					</div>
					<div className="carouselImage">
						<img src={sixImage} alt="NFTS" />
					</div>
					<div className="carouselImage">
						<img src={sevenImage} alt="NFTS" />
					</div>
					<div className="carouselImage">
						<img src={eightImage} alt="NFTS" />
					</div>
				</Carousel>
			</div>
			<div className="tableContainer">
				<table>
					<thead>
						<tr className="topCell">
							<td className="tcOne">VIP COLLECTION</td>
							<td className="tcTwo">GENESIS COLLECTION</td>
						</tr>
						<tr className="tHeader">
							<th className="thOne">789 NFTs @ .25 ETH Each</th>
							<th className="thTwo">8,675 NFTs @ .09 ETH Each</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Minting January 28, 2023</td>
							<td>COMING SOON</td>
						</tr>
						<tr>
							<td>
								<strong>VIP Membership</strong> to Gen-X Community (Including{' '}
								<strong>Unlimited Access</strong> To Educational Resources &{' '}
								<strong>Free Events</strong>, Along With Token Gated VIP Discord
								Channel & VIP Holder Role)
							</td>
							<td>
								<strong>Premium Membership</strong> to Gen-X Community
								(Including <strong>Premium Access</strong> to Educational
								Resources & Events, Along With Token Gated Discord Channel &
								Genesis Holder Role)
							</td>
						</tr>
						<tr>
							<td>
								Chance To Mint <strong>Mystery NFTs</strong> You Can Burn In
								Exchange For Your Very Own Custom Hand-Selected Goat
							</td>
							<td>
								Chance to Mint <strong>Mystery NFTs</strong> You Can Burn In
								Exchange For Your Very Own Custom Hand-Selected Goat
							</td>
						</tr>
						<tr>
							<td>
								<strong>VIP Airdrops</strong> to Enhance The Narrative Of Your
								Collectible
							</td>
							<td>
								<strong>Premium Airdrops</strong> to Enhance The Narrative Of
								Your Collectible
							</td>
						</tr>
						<tr>
							<td>
								<strong>Free Mint</strong> of 2 Planned Future Gen-X NFTs
								Collections – <span className="whiteSpace">.</span> &{' '}
								<span className="whiteSpace">.</span>
							</td>
							<td>
								<strong>Premium Allowlist</strong> to Mint 2 Planed Future Gen-X
								NFTs Collections – <span className="whiteSpace">.</span> &{' '}
								<span className="whiteSpace">.</span>
							</td>
						</tr>
						<tr>
							<td>
								<strong>VIP Allowlist</strong> For Genesis Collection Mint
							</td>
							<td>{''}</td>
						</tr>
						<tr>
							<td>
								Custom <strong>VIP-Only Traits</strong>
							</td>
							<td>{''}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
