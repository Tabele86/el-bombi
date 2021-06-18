import React from 'react';
import imageTop from '../images/adolis2.jpg';
import imageBot from '../images/adolisWalkOff.jpg';
import fireWorks from '../images/fire-works.png';
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
			</div>
			<div className="container flex content-between flex-row items-center">
				<img
					src={fireWorks}
					alt="fire works"
					className=" opacity-50 md:opacity-100 object-fit w-1/3 md:object-cover max-h-80 flex-1  invisible md:visible"
					// w-full md:w-1/3 absolute md:relative
				/>
				<div className="  relative flex-1 justify-center py-4  ">
					<PostStats />
				</div>
				<img
					src={fireWorks}
					alt="fire works"
					className="object-fit  md: lg:max-h-80  flex-1 w-1/3  invisible md:visible"
				/>
			</div>
			<img
				src={imageBot}
				alt=""
				className=" pt-5 object-fit max-h-80 w-full sm:object-fill md:object-cover  lg:object-cover  md:object-top lg:object-top"
			/>

			<div className="container sm:mx-auto flex flex-col  items-center">
				<Footer />
			</div>
		</main>
	);
}

export default Stats;
