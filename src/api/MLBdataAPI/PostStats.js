import React from 'react';
import StatList from './StatList';
import useFetch from "react-fetch-hook";

export default function PostStats() {
	const apiKey= process.env.REACT_APP_RAPID_API_KEY
	// const [ data, setData ] = useState(null);
	// const [ error, setError ] = useState(null);
	const{isLoading, error, data} = useFetch(
	// useEffect(() => {
	// 	fetch(

		"https://mlb-data.p.rapidapi.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='666969'", {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": `${apiKey}`,
				"x-rapidapi-host": "mlb-data.p.rapidapi.com"
			}
		})
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
	
	
	
	 <StatList   data={data} />
	</>
	)
};

