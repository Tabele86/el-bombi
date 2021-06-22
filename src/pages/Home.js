import React from 'react';
import image from '../images/elbombi.jpg';
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

				<div className="text-white py-5">
					<a target="_blank" rel="noreferrer" href="https://www.mlb.com/all-star/ballot">
						<b>ALL STAR BALLOT !!!</b>
					</a>
				</div>
				<br />
				<div className="text-white ">
					<ul>
						<li> Phase 1 : June 24th</li>
						<li> Phase 2 : July 1st</li>
						<li> Winners will be announced July 1st 9PM</li>
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
