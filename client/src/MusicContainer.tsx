import * as React from "react";
import Sound from "react-sound";
// import "../media/audio/Punisher.mp3";

// https://www.npmjs.com/package/react-sound

interface MusicContainerState {
	playStatus; // Sound.status.{PLAYING,STOPPED,PAUSED}
	volume: number; // 1 - 100
	autoLoad: boolean;


}

export default class MusicContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	onPlayChange({position, duration}) {
		console.log("on play change");
		console.log(position);
		console.log(duration);
	}

	render() {
		return (
			<div>
				<Sound
					url="../media/audio/Punisher.mp3"
					volume={50}
					autoLoad={true}
					onLoading={({bytesLoaded, bytesTotal, duration}) => {
						console.log(bytesLoaded);
						console.log(bytesTotal);
						console.log(duration);
					}}
					onPlaying={this.onPlayChange}
					onPause={this.onPlayChange}
				   	onResume={this.onPlayChange}
				   	onFinishedPlaying={() => {console.log("Finished playing")}}
				/>
			</div>
		);
	}
}
