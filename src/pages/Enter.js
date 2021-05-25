import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/adolis4.jpg';
import logo from '../images/texasrangerslogo.png';
import text from '../images/text.png';
import boom from '../images/boom.png';
import Footer from '../components/Footer';

function Enter() {
	return (
		<main className="bg-blue-400 w-full min-h-screen  ">
			<div className="container sm:mx-auto flex flex-col  items-center">
				<img src={logo} alt="logo" className="w-2/3 sm:w-1/3 h-2/3 sm:h-1/3  pt-1" />
				{/* <div className="m-0 w-1/3 sm:min-w-full flex flex-col  items-center"> */}
				<img src={image} className="pt-5 rounded-full ring-red-500" alt="" />
				{/* </div> */}

				<div className="pt-10 relative inline-block ">
					<Link
						to="/home"
						className="absolute inset-0 bg-blue-400 bg-opacity-60 md:bg-opacity-50 flex flex-col p-4 overflow-hidden"
					>
						<img className="flex-1 object-scale-down overflow-hidden " src={text} alt="text" />
					</Link>

					<img src={boom} className="object-cover  w-full h-full" alt="boom" />
				</div>
				{/* visibility: hidden */}

				<Footer />
			</div>
		</main>
	);
}

export default Enter;
