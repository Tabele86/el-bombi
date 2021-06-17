import React from 'react';
import imageTop from '../images/adolis2.jpg';
import imageBot from '../images/adolisWalkOff.jpg';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import PostStats from '../api/MLBdataAPI/PostStats';
function Stats() {
	return (
		<main className="bg-blue-400 w-full min-h-screen ">
			<NavBar />
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Title />
				<img src={imageTop} alt="" className=" object-contain " />
				{/* <div className="container flex content-between flex-row "> */}
				<div className="py-4">
					<PostStats />
				</div>
				<div className="">
					<img src={imageBot} alt="" className=" object-fit max-h-80" />
				</div>

				<Footer />
			</div>
		</main>
	);
}

export default Stats;
