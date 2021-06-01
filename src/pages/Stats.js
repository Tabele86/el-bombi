import React from 'react';
import image from '../images/adolis2.jpg';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
// import PostList from '../api/MLBdataAPI/PostList';
// import AxiosMLB from '../api/MLBdataAPI/AxiosMLB';
import PostStats from '../api/MLBdataAPI/PostStats';
function Stats() {
	return (
		<main className="bg-blue-400 w-full min-h-screen ">
			<NavBar />
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Title />
				<div className="">
					<img src={image} alt="" className=" object-contain" />
				</div>
				<PostStats />

				<Footer />
			</div>
		</main>
	);
}

export default Stats;
