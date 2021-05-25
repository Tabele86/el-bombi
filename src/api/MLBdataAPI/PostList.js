import React from 'react';
import axios from 'axios';

// class PostList extends Component() {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			posts: []
// 		};
// 	}
// 	componentDidMount() {
// 		axios
// 			.get(
// 				`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='666969'`
// 			)
// 			.then((response) => {
// 				this.setState({
// 					postList: response.data
// 				});
// 				console.log(response.data);
// 			});
// 	}
const PostList = () => {
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
	axios
		.request(options)
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.error(error);
		});
	// render() {
	// const { postsList } = this.state;
	return (
		<div>
			<h1>List of Stats</h1>
			{/* {postsList.length ? postsList.map((post) => <div key={post.queryResults}>{post.row}</div>) : null} */}
		</div>
	);
};
export default PostList;
