import React from 'react';

export default function NFTS101() {
	const Accordion = ({ title, children }) => {
		const [isOpen, setOpen] = React.useState(false);
		return (
			<div className="accordion-wrapper">
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
		<div className="nfts101-page">
			<h2>NFTS 101</h2>

			<div className="wrapper">
				<Accordion title="What is an NFT?">
					<p>
						NFTS are Non-Fungible Tokens.
						<br />
						OK, but what does THAT mean?
					</p>

					<p>Let’s break it down:</p>

					<p>
						Non-Fungible means unique, one-of-a-kind – something that can’t be
						traded or swapped for another just like it, nor can it be duplicated
						or copied. (Worth noting, someone can try to copy the image of an
						NFT itself – say by doing a screenshot – but they will not be able
						to copy or own the NFT itself by doing so.)
					</p>

					<p>
						Token means a digital asset or item. Think of it like a digital file
						of a collectible.
					</p>

					<p>
						Currently, NFTs mostly are created (or “minted”) to represent
						digital versions of real-world objects – art, videos, music, and
						in-game or virtual world items (such as real estate/land, avatars,
						clothing or accessories for avatars, etc.).
					</p>

					<p>
						NFTs are each uniquely coded items on a “blockchain” (most of them,
						so far, on the Ethereum blockchain, though there are other
						blockchains like Solana, Polygon, Avalanche, etc.).{' '}
					</p>

					<p>
						A “blockchain” is a publicly accessible digital ledger, that records
						every single transaction that takes place on it. So, each time
						someone buys or sells a unique NFT, for example, you can go on the
						blockchain and see which wallet it moved from and to. (In Gen-X
						speak – it’s kinda like a library card, where you can see the
						history of who has checked out a book going way back. It’s a way to
						show the entire history of who had or has it.)
					</p>

					<p>
						Because of this, NFTs contain built-in authentication (think, a
						digital signature) and can be traced on the blockchain as they move
						around, which serves as proof of ownership.
					</p>

					<p>
						NFTs are typically bought and sold using cryptocurrency (for
						example, Ethereum if the NFT is on the Ethereum blockchain), though
						in some cases you can buy them with a credit card which makes things
						much easier (and why you’ll be able to do so with our Latchkey Kids
						NFTS).
					</p>

					<p>
						Since each NFT is unique, if there is public demand for one, this
						should drive the price of it higher (since more people want it, but
						there is scarcity, given its limited supply).
					</p>

					<p>
						In the current iteration, NFTs are revolutionizing how artists and
						content creators can distribute and sell their creations. They are
						now able to sell items straight to consumers as an NFT (rather than,
						say, having to rely on auction houses or large distributors), and
						doing so allows them to keep a larger portion of the proceeds. Plus,
						unlike traditional art and content, artists/creators can program
						royalties straight into their NFTs, so they get a portion of each
						future sale of their creation (rather than, traditionally, where the
						artist/creator only ever gets paid once on the initial sale).{' '}
					</p>

					<p>
						Many NFT projects (like Gen-X NFTS) also are utilizing the sales and
						royalties they get to donate a percentage of the funds to worthwhile
						charities.
					</p>

					<p>
						Things like this are possible because the blockchain coding allows
						for what are called “smart contracts” – digital terms and conditions
						programmed right into the NFT itself, that activate and execute
						automatically when certain predetermined conditions are met or
						satisfied.{' '}
					</p>

					<p>
						All this said, NFTs are still VERY EARLY in their life cycle and
						many people believe that, in the future, given their unique and
						verifiable / traceable nature, they will be used in day-to-day life
						for many things, such as tracking ownership of real estate, life
						insurance contracts, medical records, financial documents, concert /
						event / plane tickets, etc.
					</p>

					<p>Stay tuned to see what happens…</p>

					<p>
						<strong>
							<i>
								This is not financial advice and invest in crypto or NFTs at
								your own risk please.
							</i>
						</strong>
					</p>
				</Accordion>
				<Accordion title="What is crypto (or cryptocurrency)?">
					<p>
						Crypto (or Cryptocurrency) is a form of digital, encrypted currency
						that lives on a decentralized blockchain system. (Stay with me…)
						It’s basically a medium of exchange – but unlike a country’s
						currency, which is controlled by a centralized authority who manages
						the value of the currency, crypto is decentralized (meaning no one
						body or organization controls the value – it is determined broadly
						among all of the users, via the internet).
					</p>

					<p>
						Think of a “blockchain” kind of like a checkbook that’s distributed
						across tons of computers all over the world. Each transaction is
						recorded in a “block” and all of them are linked together on a
						“chain” of every previous cryptocurrency transaction. Everyone who
						uses a cryptocurrency has their own copy of this “checkbook,” which
						all together creates a unified transaction record so you can see in
						real time every single transaction that has ever taken place.
					</p>

					<p>
						While you can use crypto to buy and sell goods/services, currently,
						it’s used mostly for investing (just like people buy and sell
						stocks, bonds or commodities). Some people day trade crypto like
						they would trade stocks, buying and selling based on price movement.
						Others are holding onto theirs for the long term, hoping they’ll
						have a big return in the future when crypto becomes much more
						mainstream in its use. Many people think of crypto to be a store of
						value, the way some folks hold onto gold or silver, for example.
						Eventually, a common belief is that people will be using crypto to
						buy and sell things as a regular practice each day, but it hasn’t
						reached mainstream adoption just yet.
					</p>

					<p>
						Because crypto is not managed or controlled by a centralized entity,
						prices can fluctuate widely based on activities of all the users,
						making it very volatile and risky these days. People do believe
						that, in the future, as more adoption of crypto happens worldwide,
						the prices will normalize and see fewer swings up and down than to
						the degree we see now.
					</p>

					<p>
						Bitcoin was the first cryptocurrency and, along with Ethereum, these
						are the most widely known “coins” in the marketplace.{' '}
					</p>

					<p>
						Investing in crypto is not for the faint of heart – but you can buy
						it pretty easily on Coinbase, PayPal, Venmo, and other places. Even
						just a few bucks worth at a time. Which makes it accessible for
						people who don’t have a lot of money to get into this space, but
						believe they will hopefully see a return on their investment in the
						future.
					</p>

					<p>
						<strong>
							<i>
								That said, this is not financial advice and invest in crypto or
								NFTs at your own risk please.
							</i>
						</strong>
					</p>
				</Accordion>
				<Accordion title="What is a wallet?">
					<p>
						When you buy or sell crypto or NFTs, they need a virtual/digital
						location to move into or out of, so you can trace your ownership or
						the transaction and keep your stuff safe. This location is your
						wallet. But you don’t stick it in your back pocket and hook it to a
						chain. It exists on the blockchain.
					</p>

					<p>
						Your wallet is a digital spot that stores your private keys (these
						are like your passwords), to protect and keep accessible your crypto
						and NFTs (In Gen-X speak – think of these like your combination lock
						to your safety deposit box, where you store your valuables). You
						basically want a wallet to make any crypto or NFT transactions
						(e.g., buying and selling).{' '}
					</p>

					<p>
						To be clear, crypto wallets don’t actually store or hold your crypto
						or NFTs, since what you hold only lives on the blockchain. However,
						to access, see and move what you own, you need a private key (that
						acts as your proof of ownership) – and your wallet stores that
						private key, so things become accessible to you. If you lost your
						private key, you’d lose access to anything you hold. So, protect it
						at all costs.
					</p>

					<p>
						Setting up a crypto wallet can be confusing and oddly complicated,
						and doing so is probably the single most challenging barrier to
						entry for people about getting into crypto and NFTs. There are also
						different types, each with their own pros and cons – some store your
						private keys online (e.g., MetaMask, Coinbase, etc.), called hot
						storage, and some store your private keys offline on a device (e.g.,
						Ledger, Trezor, etc.) that plugs into your computer’s USB port,
						called cold storage.{' '}
					</p>

					<p>
						Worth noting that if you just wanted to buy and sell crypto for
						investment purposes and nothing else, you can do so without even
						having a wallet (e.g., through Coinbase, PayPal, Venmo, and other
						places), but doing so means you do not own or control the actual
						crypto, and this greatly limits the functionality and utility for
						you. As a result, many folks strongly advise against doing so.
					</p>

					<p>
						<strong>
							<i>
								This is not financial advice and invest in crypto or NFTs at
								your own risk please.
							</i>
						</strong>
					</p>
				</Accordion>
				<Accordion title="What is Web3?">
					<p>
						To answer this one, you need to know what Web1 and Web2 are first.
					</p>

					<p>
						<strong>Web1</strong> = the first stage of the World Wide Web, with
						primarily static, read-only web pages, and just banners for ads.
					</p>

					<p>
						<strong>Web2</strong> = with the introduction of user generated
						content (e.g., YouTube videos, blogs, personal websites, file
						sharing, etc.), social media, web-based interactive advertising,
						sharing your personal data (which is then sold and monetized by
						private centralized companies) in exchange for access to apps and
						content, and e-commerce, this is our current Internet model.
					</p>

					<p>
						<strong>Web3</strong> = the upcoming future version of the Internet,
						focused on privacy/protection (where each user owns and controls
						their own personal data, and can monetize it themselves),
						decentralization through blockchains (e.g., the ability to safely
						transact business directly between parties, without going through
						intermediaries or banks in exchange for your data, and without
						needing permission from a third party), customized experiences and
						marketing based on unique user behavior, and the Metaverse.
					</p>

					<p>
						The key intended features of Web3 are decentralization (e.g., users
						get more control over their own content and personal data, so the
						massive databases of companies like Meta and Google are devalued),
						Artificial Intelligence (e.g., computers will be able to understand
						information like humans do, gradually becoming more accurate) and
						virtual realities (e.g., spending time in immersive virtual worlds
						or games, likely through the use of a headset or similar device).
					</p>

					<p>
						We are still VERY early in the Web3 timeline and so it is impossible
						to truly know what Web3 will actually become.
					</p>
				</Accordion>
				<Accordion title="What is the Metaverse?">
					<p>
						This one is a complex and vague, since no one yet knows exactly what
						the Metaverse will be, given how early in the timeline we are.
						Simply put, the Metaverse is the next version of how we will
						routinely interact with the online world, and other people in it. It
						will be a highly immersive, all-encompassing, and immensely
						socialized front-end of the Internet, allowing us to communicate
						with others and share/manipulate data. A 3D virtual landscape of
						limitless potential, where you can immerse yourself and experience
						the digital world, in increasingly hyper realistic and natural ways.
						Think of it like the interface we’ll use to engage with all things
						online. It may be entirely digital, or it can mix real world
						elements with virtual elements. In some concepts, you’ll be able to
						take your digital property or traits (e.g., your NFTs, your avatar,
						its clothes, etc.) from one virtual environment or platform to
						another. And while some video games, for example, have elements of
						the Metaverse already happening, some tech folks predict that in the
						future you’ll be able to do and experience nearly anything online in
						the virtual world (from office meetings, to weddings, to buying a
						home).
					</p>
				</Accordion>
			</div>
		</div>
	);
}
