import React from 'react';

export default function FAQ() {
	const Accordion = ({ title, children }) => {
		const [isOpen, setOpen] = React.useState(false);
		return (
			<div className="accordion-wrapper" id="faq">
				<div
					className={`accordion-title ${isOpen ? 'open' : ''}`}
					onClick={() => setOpen(!isOpen)}
				>
					{title}
				</div>
				<div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
					<div className="accordion-content">{children}</div>
				</div>
			</div>
		);
	};

	return (
		<div className="nfts101" id="nfts101">
			<h2>FAQ</h2>

			<div className="wrapper">
				<Accordion title="What’s The Gen-X NFTs Collection?">
					<p>
						A collection of retro, nostalgic, pop culture Non-Fungible Tokens
						(NFTs) stored on the Ethereum blockchain. Each NFT represents a
						truly unique, one-of-a-kind, digital collectible.
					</p>
					<p>The collection is allocated as follows:</p>
					<ul>
						<li>789 NFTs are VIP</li>
						<li>8,675 NFTs are GENESIS. </li>
					</ul>
					<p>
						Owning one is your membership pass in an online and IRL community
						powered by nostalgia and a love of the 80s.{' '}
					</p>
				</Accordion>
				<Accordion title="How Are The NFTs Created?">
					<p>
						By our amazing artist, Aâdila. She has worked on this art for over a
						year to create hundreds of amazing hand drawn traits and
						accessories, capturing the 80s vibe perfectly to take us all back in
						time. Upon minting, all of our traits/accessories will be
						randomized, generating a collection of truly unique collectibles
						(each one is totally one of a kind) that combines all the things we
						love about the 80s in some totally radical goats.
					</p>
				</Accordion>
				<Accordion title="When Can I Buy?">
					<p>
						VIP collection – January 28, 2023
						<br />
						Genesis Collection – Coming Soon
					</p>

					<p>
						(Exact dates will always be posted on this site and our socials in
						advance)
					</p>
				</Accordion>
				<Accordion title="What Is the Mint Price?">
					<p>
						VIP Collection – .25 ETH Per NFT
						<br />
						Genesis Collection – .09 ETH (as in, 8-6-7-5… .09) Per NFT
					</p>
				</Accordion>
				<Accordion title="How Many NFTs Can I Buy?">
					<p>
						You can purchase up to 4 NFTs per wallet for each of the VIP
						Collection and the Genesis Collection.
					</p>
				</Accordion>
				<Accordion title="Where Does My NFT Go After I Buy One?">
					<p>
						Your Gen-X NFT will appear and show up in whatever address, or
						connected wallet, you used to purchase it (or in the wallet created
						for you, if you paid with a credit card). You can connect your
						wallet to an account in OpenSea and see your NFT(s){' '}
						<a
							href="https://opensea.io/collection/gen-x-nfts-the-vip-collection"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</p>
				</Accordion>
				<Accordion title="Will There Be An Allow List And A Pre-Sale?">
					<p>
						Yes. We’ll create an allow list through Premint (offering various
						chances through our social media and collaborations with other
						communities to enter) that will give you access to mint NFTs in a
						pre-sale prior to the public sale. Keep an eye on our socials for
						your chances to get on the allowlist or click{' '}
						<a
							href="https://www.premint.xyz/genxnfts/ "
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</p>
				</Accordion>
				<Accordion title="What Can I Do With My NFTs?">
					<p>
						BRAG. SHOW OFF. OBSESS. DIE FOR. You can download the art file, show
						it off online, text it to your friends, email it to your mom, or
						stare at it in your wallet. You can make any personal,
						non-commercial use you’d like, and even commercial uses – so you can
						actually make money by monetizing your NFT’s art in fun ways you
						choose (posters, t-shirts, give your goat a personality and make
						them an influencer, etc.). In the future, we hope you’ll also be
						able to show off your NFTs across metaverses. Note: for only the
						iconic 1:1s, no commercial rights are granted.
					</p>
				</Accordion>
				<Accordion title="Are Gen-X NFTs A Good Investment?">
					<p>
						Ultimately, only you can and only you should make this decision for
						yourself. We believe owning a Gen-X NFT will provide unique artwork,
						along with an ongoing fun and educational experience, collectively
						worth the price anyone pays. We also believe our collection has a
						long life ahead, and will be an ever-growing and ever-evolving
						project and brand. However, as with anything, the success and market
						price of Gen-X NFTs, as well as the ownership experience you have,
						each relies on countless variables and factors, many of which are
						totally out of our control… and no one can predict the future. As
						with anything in life, please don’t spend any money you can’t afford
						not to have.
					</p>
				</Accordion>
				<Accordion title="Will There Be More Collections In The Future?">
					<p>
						OH, YEAH! We’ve currently got plans for 2 future collections (and
						some airdrops for the VIP/Genesis collection) to create a really fun
						ongoing brand narrative ownership experience. Plans include{' '}
						<strong>.</strong> <strong>.</strong> and <strong>.</strong>{' '}
						<strong>.</strong> collections in the future.
					</p>
				</Accordion>
				<Accordion title="Sounds Cool! How Can I Get Involved? ">
					<p>
						A great place to start is our{' '}
						<a
							href="https://twitter.com/GENxNFTs"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</a>{' '}
						or our{' '}
						<a
							href="https://discord.gg/genxnfts"
							target="_blank"
							rel="noopener noreferrer"
						>
							Discord
						</a>
						, each home to our community of 80s pop culture lovers. You don’t
						need to own a Gen-X NFT to join us! Everyone is welcome to jump into
						the conversation anytime, share your ideas, express your opinions,
						and hang out with other Gen-Xers (and those who wish they were).
						Hope to see you there!
					</p>
				</Accordion>
			</div>
		</div>
	);
}
