import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/adolis4.jpg';
import logo from '../images/texasrangerslogo.png';
import text from '../images/text.png';
import boom from '../images/boom.png';

function Enter() {
	return (
		<main className="bg-blue-400 min-h-screen  ">
			<div className="container sm:mx-auto flex flex-col  items-center">
				<img src={logo} alt="" className="w-1/3 sm:w-2/3 h-1/3 sm:h-2/3  " />
				{/* <div className="m-0 w-1/3 sm:min-w-full flex flex-col  items-center"> */}
				<img src={image} className="pt-5 rounded-full ring-red-500" alt="" />
				{/* </div> */}

				<div className="pt-10 relative justify-center">
					<img src={boom} className="abosulte  top-0 left-0" alt="" />
					<div className=" flex flex-col justify-center items-center absolute top-0 left-0  pt-20">
						<Link to="/home">
							<img className="" src={text} alt="El Bombi" />
						</Link>
					</div>
				</div>
				{/* visibility: hidden */}

				<div className="pt-60 pb-0">
					<footer>
						<h2 className="text-red-500 ">El Bombi Fan Site ©</h2>
					</footer>
				</div>
			</div>
		</main>
	);
}

export default Enter;
