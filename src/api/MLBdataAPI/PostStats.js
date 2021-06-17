import React from 'react';
import StatList from './StatList';
import useFetch from "react-fetch-hook";

export default function PostStats() {
	// const [ data, setData ] = useState(null);
	// const [ error, setError ] = useState(null);
	const{isLoading, error, data} = useFetch(
	// useEffect(() => {
	// 	fetch(

			"http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='666969'",
			{
				method: 'GET'
				// headers: {
				// 	'x-rapidapi-key': 'dba663cea0mshf983773a122d35dp165c1djsnbe83a5d1679b',
				// 	'x-rapidapi-host': 'mlb-data.p.rapidapi.com'
				// }
			}
		);
		// .then((res) => {
		// 	console.log(res);
		// 	return res.data;
		// });
		// .catch((err) => {
		// 	console.error(err);
		// })
		// .then((stats) => {
		// 	setStats(stats);
		// });
	// }, []);

	if (isLoading) return "Loading...";
	if (error) return "Error!";
// console.log(data)
// console.dir(data)

	return (
	<>
	{/* <p>{JSON.stringify(data)}</p> */}
	
	
	 <StatList   data={data} />
	</>
	)
};

