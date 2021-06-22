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
			<div className=" flex content-between flex-row items-center">
				<img
					src={fireWorks}
					alt="fire works"
					className=" object-fit w-1/3  max-h-80 flex-1 justify-self-start invisible md:visible pr-15"
					// w-full md:w-1/3 absolute md:relative
				/>
				<div className="  relative flex-1 justify-self-center py-4  ">
					<PostStats />
				</div>
				<img
					src={fireWorks}
					alt="fire works"
					className="object-fit   lg:max-h-80  flex-1 w-1/3  invisible md:visible pl-15"
				/>
			</div>
			<img
				src={imageBot}
				alt=""
				className=" pt-5 object-cover max-h-60 w-full  sm: object-top md:object-top lg:object-right-top"
			/>

			<div className="container sm:mx-auto flex flex-col  items-center">
				<Footer />
			</div>
		</main>
	);
}

export default Stats;
