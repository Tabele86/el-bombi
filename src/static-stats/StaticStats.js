import React from 'react';
import Tooltip from 'react-simple-tooltip';
import data from './stats.json';

const StaticStats = () => {
	// console.log(data);

	const stats = data[0];
	// console.log(stats);
	return (
		<div className="stat-preview text-white text-center container">
			<h2>Adolis Garcia</h2>
			<h4 className="underline"> MLB Stats (2021)</h4>
			<div className=" container stat-list text-white py-5 grid grid-cols-3 gap-10 sm:gap-4 place-items-center max-w-md">
				<div>
					<Tooltip content="At Bats">
						<h2>AB</h2>
					</Tooltip>
					<p>{stats.ab}</p>
				</div>
				<div>
					<h2>Hits</h2>
					<p>{stats.hits}</p>
				</div>
				<div>
					<Tooltip content="Home Runs">
						<h2>HR</h2>
					</Tooltip>
					<p>{stats.hr}</p>
				</div>

				<div>
					<Tooltip content="Batting Average">
						<h2>BA</h2>
					</Tooltip>
					<p>{stats.avg}</p>
				</div>
				<div>
					<h2>Runs</h2>
					<p>{stats.runs}</p>
				</div>
				<div>
					<Tooltip content="Runs Batted In">
						<h2>RBI</h2>
					</Tooltip>
					<p>{stats.rbi}</p>
				</div>
				<div>
					<h2>Walks</h2>
					<p>{stats.bb}</p>
				</div>
				<div>
					<Tooltip content="Stolen Bases">
						<h2>SB</h2>
						{/* Stolen Bases */}
					</Tooltip>
					<p>{stats.sb}</p>
				</div>
				<div>
					<h2>Games</h2>
					<p>{stats.g}</p>
				</div>
				<div>
					<Tooltip content="On Base Percentage">
						<h2>OBP</h2>
						{/* (On Base Percentage) */}
					</Tooltip>
					<p>{stats.obp}</p>
				</div>
				<div>
					<Tooltip content="Slug Percentage">
						<h2>SLUG</h2>
						{/* Slug Percentage */}
					</Tooltip>
					<p>{stats.slg}</p>
				</div>
				<div>
					<Tooltip content="OBP + SLUG">
						<h2>OPS</h2>
						{/* (OBP + SLUG) */}
					</Tooltip>
					<p>{stats.ops}</p>
				</div>
			</div>
		</div>
	);
};

export default StaticStats;
