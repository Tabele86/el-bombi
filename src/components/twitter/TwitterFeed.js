import React from 'react';
import TweetEmbed from 'react-tweet-embed';

function TwitterFeed() {
	return (
	<>
			<TweetEmbed date="Jun 4" className="RBI" id="1400978783897858049" />
			<TweetEmbed date="Jun 1" className="Defense" id="1399894427938836480" />
			<TweetEmbed date="May 27" className="Rob-HR" id="1398102339462963204" />
			<TweetEmbed date="May 26" className="HR@Angels" id="1397664956951281671" />
		</>
	);
}

export default TwitterFeed;
