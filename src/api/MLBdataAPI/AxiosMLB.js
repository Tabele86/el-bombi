import { React, useState, useEffect } from 'react';
import axios from 'axios';

const AxiosMLB = () => {
	const [ data, setData ] = useState(null);
	// const [ error, setError ] = useState(null);

	const options = {
		method: 'GET',
		url: 'http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam',
		params: {
			league_list_id: "'mlb'",
			game_type: "'R'",
			season: "'2021'",
			player_id: "'666969'"
		}
	};

	const fetchData = () => {
		// setError(null);
		axios.request(options).then((res) => res.data).catch((error) => error);
	};
	// setData(res.data);
	// console.log(res.data);
	async function getResponse() {
		fetchData().then((res) => {
			console.log(res);
		});
	}
	// if (res.data === undefined) {
	// 	setError(true);
	// }
	// 	});
	// };
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<li data={setData} />
		</div>
	);
};
export default AxiosMLB;
