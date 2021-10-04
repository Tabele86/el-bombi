import React, {Suspense} from 'react';
import image from '../images/adolis3.jpg';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import imageOF from '../images/adolisOF.jpg';
import imageTexasStar from '../images/texas-star-logo.png';

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
				<div className=" grid grid-flow-row gap-4  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
				<>
						<Suspense fallback={<div className="container flex flex-col  items-center text-white">Loading...</div>}>
							 <TwitterFeed /> 
						</Suspense>
					</>
					<>
						<Suspense fallback={<div>Loading...</div>}>
							{showTwitter2 ? <Twitter2 /> : null}
						</Suspense>
					</>
				</div>
				<div className="pt-40 container flex flex-col  items-center ">	<button className="text-white" type="button" onClick={() => setTwitter2(true)}>
					Show More
				</button>
				
				</div>
			<div className="pt-10 flex flex-col ">
			<a href="#top">
				<img
					src={imageTexasStar}
					alt="Texas Rangers star logo"
					className="object-contain max-h-28 md:max-h-36 lg:max-h-48"
				/>
				</a>
			</div>
				
			</div> 
			<div className="pt-60">
				
				<img
					src={imageOF}
					alt="adolis outfield catch"
					className="  pt-5 object-cover max-h-60 w-full  sm: object-top md:object-center lg:object-center"
				/>
				
			</div>
			<div className="container sm:mx-auto flex flex-col  items-center">
				<Footer />
			</div>
		</main>
	);
}

export default Highlights;
