import React from 'react';
import { NavLink } from 'react-router-dom';
import TRlogo from '../images/Texas_Rangers.svg';

function NavBar() {
	return (
		<header className="bg-red-800 ">
			<div className="container mx-auto flex-wrap justify-between  ">
				<nav className="flex justify-between ">
					<div className="display inline-flex ">
						<NavLink
							to="/home"
							exact
							activeClassName="text-blue-500"
							className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-800  font-bold serif tracking-widest"
						>
							Home
						</NavLink>
						<NavLink
							to="/stats"
							activeClassName="text-blue-500"
							className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-800  font-bold serif tracking-widest"
						>
							Stats
						</NavLink>

						<NavLink
							to="/highlights"
							activeClassName="text-blue-500"
							className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-800  font-bold serif tracking-widest"
						>
							Highlights
						</NavLink>
					</div>
					<div>
						<img src={TRlogo} alt="texas rangers logo" className=" object-contain h-16" />
					</div>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
