import React from 'react';
import image from '../images/adolis3.jpg';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import imageOF from '../images/adolisOF.jpg';

const TwitterFeed = React.lazy(() => import('../components/twitter/TwitterFeed'));
const Twitter2 = React.lazy(() => import('../components/twitter/TwitterFeed2'));

function Highlights() {
	const [ showTwitter2, setTwitter2 ] = React.useState(false);
	

	
	return (
		<main className="bg-blue-400 w-full min-h-screen ">
			<NavBar />
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Title />
				<div className="pb-10">
					<img src={image} alt="adolis points up after homerun" className=" object-contain" />
				</div>
				<div className=" grid grid-flow-row gap-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
				<>
						<React.Suspense fallback={<div className="container flex flex-col  items-center text-white">Loading...</div>}>
							 <TwitterFeed /> 
						</React.Suspense>
					</>
					<>
						<React.Suspense fallback={<div>Loading...</div>}>
							{showTwitter2 ? <Twitter2 /> : null}
						</React.Suspense>
					</>
				</div>
				<button className="text-white" type="button" onClick={() => setTwitter2(true)}>
					Show More
				</button>
				
			</div> 
			<div className="pt-10">
				{/* <img
					src={imageOF}
					alt="adolis outfield catch"
					className="  object-contain max-h-80 w-full sm:object-fit md:object-none lg:object-none"
				/> */}
				<img
					src={imageOF}
					alt="adolis outfield catch"
					className="  object-fit max-h-80 w-full sm:object-fill md:object-cover  lg:object-cover  md:object-center lg:object-center"
				/>
				
			</div>
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Footer />
			</div>
		</main>
	);
}

export default Highlights;
