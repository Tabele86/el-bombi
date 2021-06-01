const StatList = ({ data }) => {
	return (
		<div className="stat-list">
			{Object.keys(data).map((key) => (
				<div className="stat-preview">
					<h2>At Bats</h2>
					<p>{data[key].ab}</p>
					<h2>Hits</h2>
					<p>{data[key].h}</p>
					<h2>Home Runs</h2>
					<p>{data[key].hr}</p>
					<h2>Walks</h2>
					<p>{data[key].bb}</p>
					<h2>Batting Average</h2>
					<p>{data[key].avg}</p>
					<h2>Runs</h2>
					<p>{data[key].r}</p>
					<h2>Runs Batted In</h2>
					<p>{data[key].rbi}</p>
					<h2>Stolen Bases</h2>
					<p>{data[key].sb}</p>
					<h2>On Base Percentage</h2>
					<p>{data[key].obp}</p>
					<h2>Slug Percentage</h2>
					<p>{data[key].slg}</p>
					<h2>OPS</h2>
					<p>{data[key].ops}</p>
				</div>
			))}
		</div>
	);
};

export default StatList;
