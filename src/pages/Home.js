import React from 'react';
import image from '../images/elbombi.jpg';

import Sound from '../components/Sound';
function Home() {
	return (
		<main>
			<div className="container">
				<img src={image} alt="" className="w-full" />
			</div>
			<section className="">
				<h1 className=" ">El Bombi</h1>
				<div>
					<p className=" ">El Bombi Fan Site</p>
					<div>
						<Sound />
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
