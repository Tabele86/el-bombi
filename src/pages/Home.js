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
				<h6>
					Photo courtesy from=
					<a target="_blank" rel="noreferrer" href="https://twitter.com/jc_texas_art?lang=en">
						JC_Texas_Art
					</a>
				</h6>

				<div>
					<a target="_blank" rel="noreferrer" href="https://www.mlb.com/all-star/ballot">
						ALL STAR BALLOT
					</a>
				</div>
				<Sound classNmae="left-0" />
				<Footer />
			</div>
		</main>
	);
}

export default Home;
