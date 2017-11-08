import * as React from "react";
import Menu from "../Static/MenuBar/MenuBar";
import TourContainer from "../TourMenu/MainContainer";
import MusicContainer from "../MusicContainer";
require("../../media/images/tour.jpg");

export default class MainContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const backgroundPath = "../../media/images/tour.jpg";
		const fullBackgroundPath = "url(" + backgroundPath + ")";

		return (
			<div className="container-fluid">
				<img src="../../media/images/tour.jpg" />
				<div className="row justify-content-center" style={{height: "100vh", backgroundImage: fullBackgroundPath}}>
					<Menu />
					{/*<div>*/}
						{/*<TourContainer />*/}
					{/*</div>*/}
					<div>
						<MusicContainer />
					</div>
				</div>
			</div>
		);
	}
}
