import React from 'react';

const StatList = ({ data }) => {
	// console.log(data);
	// console.log(data['sport_hitting_tm']['queryResults']['row']);
	const stats = data['sport_hitting_tm']['queryResults']['row'];
	// console.log(stats);
	return (
		<div className="stat-preview text-white text-center">
			<h2>Adolis Garcia</h2>
			<h4 className="underline">Current MLB Stats (2021)</h4>
			<div className="stat-list text-white py-5 grid grid-cols-3 gap-6 sm:gap-4 place-items-center">
				<div className="ab border-white border-px ">
					<h2>AB</h2>
					<p>{stats.ab}</p>
				</div>
				<div>
					<h2>Hits</h2>
					<p>{stats.h}</p>
				</div>
				<div>
					<h2>HR</h2>
					<p>{stats.hr}</p>
				</div>

				<div>
					<h2>BA</h2>
					<p>{stats.avg}</p>
				</div>
				<div>
					<h2>Runs</h2>
					<p>{stats.r}</p>
				</div>
				<div>
					<h2>RBI</h2>
					<p>{stats.rbi}</p>
				</div>
				<div>
					<h2>Walks</h2>
					<p>{stats.bb}</p>
				</div>
				<div>
					<h2>SB</h2>
					{/* Stolen Bases */}
					<p>{stats.sb}</p>
				</div>
				<div>
					<h2>Games</h2>
					<p>{stats.g}</p>
				</div>
				<div>
					<h2>OBP</h2>
					{/* (On Base Percentage) */}
					<p>{stats.obp}</p>
				</div>
				<div>
					<h2>SLUG</h2>
					{/* Slug Percentage */}
					<p>{stats.slg}</p>
				</div>
				<div>
					<h2>OPS</h2>
					{/* (OBP + SLUG) */}
					<p>{stats.ops}</p>
				</div>
			</div>
		</div>
	);
};

export default StatList;
