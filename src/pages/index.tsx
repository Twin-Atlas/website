import React, { useEffect } from "react";
import "../stylesheets/styles.css";

import Card from "../components/card";
import PageHeader from "../components/pageHeader";

import Header from "../components/header";

import logo from "../images/logo.png";
import dragonadventures_title from "../images/dragonadventures_title.png";
import sonaria_title from "../images/sonaria_title.png";
import captive_title from "../images/captive_title.png";
import warships_title from "../images/warships_title.png";
import sunnyshores_title from "../images/sunnyshores_title.png";
import felinesdestiny_title from "../images/felinesdestiny_title.png";
import sonarbanner from "../images/sonarbanner.png";

import StatCard from "../components/statCard";
import PageBody from "../components/pageBody";
import PageImage from "../components/pageImage";
import Footer from "../components/footer";
import Banner from "../components/banner";

// we use a functional component for initial render because we can't use
// hooks in class components, it sucks but that's what we gotta do
export default () => {
	useEffect(() => {
		document.title = "Sonar Studios";
	}, []);

	return (
		<div className="page">
			<div className="page-wrap">
				<Header />

				<Banner img={sonarbanner} video={true} />

				<div className="content">
					<PageHeader text={"stats"} />
					<StatCard
						stat="unique game sessions"
						value="600,000,000+"
						fallback="600m+"
						strong={true}
					/>
					<div className="grid">
						<StatCard stat="collective favorites" value="2.2m+" />
						<StatCard stat="community members" value="1.5m+" />
						<StatCard stat="combined likes" value="628k+" />
						<StatCard stat="average game rating" value="86%" />
					</div>
				</div>

				<div className="section">
					<div className="content">
						<PageHeader text={"about"} />
						<PageImage icon={logo} />
						<PageBody
							title={"who are we?"}
							text={
								"Sonar Studios LLC is an independent game studio that makes games on the Roblox platform. Founded officially in 2019, our flagship games Dragon Adventures and Creatures of Sonaria have attracted tens of millions of players. Sonar Studios continues to develop innovative games that push the boundaries of Roblox’s engine to provide an engaging experience for all demographics."
							}
						/>
						<PageBody
							title={"our expertise"}
							text={
								"Our experience is not just limited to games and community management — our developers have generated over 20 million virtual fashion & apparel sales on Roblox, as well as thousands of real world merchandise sales through Amazon's partnership programs."
							}
						/>
						<PageBody
							title={"partner with us"}
							text={
								"We are an innovative studio that is striving to provide the best experience to both our players and partners. Our team is dedicated to making high-quality games that test the boundaries of what Roblox is capable of. If you choose to partner with us for a branded event or full Roblox experience, we go above and beyond to deliver you a quality product in a timely manner."
							}
						/>
					</div>
				</div>

				<div className="content">
					<PageHeader text={"titles"} />
					<div className="grid">
						<Card
							img={dragonadventures_title}
							title={"Dragon Adventures"}
							link={"https://www.roblox.com/games/3475397644"}
							body={
								"Hatch eggs and raise your dragons to become powerful beasts in a variety of immersive worlds"
							}
						/>
						<Card
							img={sonaria_title}
							title={"Creatures of Sonaria"}
							link={"https://www.roblox.com/games/5233782396"}
							body={
								"Grow, fight and survive with other players as a fictional creature in the beautiful world of Sonaria"
							}
						/>
						<Card
							img={captive_title}
							title={"Captive"}
							link={"https://www.roblox.com/games/3388553819"}
							body={
								"Hack the computers, outrun the beast, unlock the exits, and escape captivity"
							}
						/>
						<Card
							img={warships_title}
							title={"Warships"}
							link={"https://www.roblox.com/games/334218733"}
							body={
								"Set sail in massive battleships for control over the seas"
							}
						/>
						<Card
							img={sunnyshores_title}
							title={"Sunny Shores"}
							link={"https://www.roblox.com/games/7071201807"}
							body={
								"Build your dream home, dress up, party with friends and more in our tropical island city"
							}
						/>
						<Card
							img={felinesdestiny_title}
							title={"Feline's Destiny"}
							link={"https://www.roblox.com/games/2586423667"}
							body={
								"Explore a rainforest, survive disasters and roleplay with friends as a wild cat"
							}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};
