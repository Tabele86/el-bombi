import React from 'react';
import image from '../images/adolis3.jpg';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import imageOF from '../images/adolisOF.jpg';
// import PostHighlights from '../api/twitterAPI/PostHighlights';
function Home() {
	return (
		<main className="bg-blue-400 w-full min-h-screen ">
			<NavBar />
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Title />
				<div className="">
					<img src={image} alt="" className=" object-contain" />
				</div>
				{/* <PostHighlights /> */}
				<div className="">
					<img src={imageOF} alt="" className=" object-fit max-h-80" />
				</div>
				<Footer />
			</div>
		</main>
	);
}

export default Home;
