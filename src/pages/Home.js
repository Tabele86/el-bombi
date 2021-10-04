import React from 'react';
import image from '../images/elbombi.jpg';
import allstars from '../images/allstars.jpg';
import Sound from '../components/Sound';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
function Home() {
	return (
		<main className="bg-blue-400 w-full min-h-screen ">
			<NavBar />
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Title />
				<div className="">
					<img src={image} alt="" className=" object-contain" />
				</div>
				<h6 className="text-white">
					Photo courtesy from=
					<a target="_blank" rel="noreferrer" href="https://twitter.com/jc_texas_art?lang=en">
						JC_Texas_Art
					</a>
				</h6>
				<div className="">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.mlb.com/news/rangers-joey-gallo-adolis-garcia-kyle-gibson-added-to-all-star-game-roster"
					>
						<img src={allstars} alt="" className=" object-contain" />
					</a>
				</div>
				<div className="text-white text-center">
					<ul>
						<li> Adolis Garcia 2021 All-Star!</li>
						<a target="_blank" rel="noreferrer" href="https://www.mlb.com/news/2021-all-star-game-rosters">
							<li> Full All-Star List</li>
						</a>
					</ul>
				</div>
				<div className="pt-3">
					<Sound />
				</div>

				<Footer />
			</div>
		</main>
	);
}

export default Home;
