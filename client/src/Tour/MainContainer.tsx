import * as React from "react";
import Static from "../Static/Static";
import TourContainer from "./TourContainer";
require("../../media/images/tour.jpg");
require("../../media/fonts/mic-32regular.ttf");
const styles = require("../generalStyles.less");

export default class MainContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const backgroundPath = "../../media/images/tour.jpg";
		const fullBackgroundPath = "url(" + backgroundPath + ")";

		return (
			<div className={"container-fluid " + styles.background + " " + styles.defaultText} style={{backgroundImage: "url(./images/tour.jpg)"}}>
				<div className="row justify-content-center" style={{height: "100vh", backgroundImage: fullBackgroundPath}}>
					<div className={"col-12"}>
						<Static />
						<TourContainer />
					</div>
				</div>
			</div>
		);
	}
}
