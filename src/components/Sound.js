import React, { useState } from 'react';
import Sound from 'react-sound';
import { FaMusic } from 'react-icons/fa';
import HR from '../music/TexasRangersHomerunMusic.mp3';

const PlaySound = (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) => {
	const [ isPlaying, setIsPlaying ] = useState(false);
	return (
		<div>
			<button onClick={() => setIsPlaying(!isPlaying)}>
				<FaMusic size="2em" />
			</button>
			<Sound
				url={HR}
				playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
				playFromPosition={300}
				onLoading={handleSongLoading}
				onPlaying={handleSongPlaying}
				onFinishedPlaying={handleSongFinishedPlaying}
				catch={Error}
			/>
		</div>
	);
};

export default PlaySound;
