import * as React from "react";
import Static from "../Static/Static";
require("../../media/images/tour.jpg");
const styles = require("../generalStyles.less");

export default class MainContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const backgroundPath = "../../media/images/tour.jpg";
		const fullBackgroundPath = "url(" + backgroundPath + ")";

		return (
			<div className={"container-fluid " + styles.background} style={{backgroundImage: "url(./images/tour.jpg)"}}>
				<div className="row justify-content-center" style={{height: "100vh", backgroundImage: fullBackgroundPath}}>
					<div className={"col-12"}>
						<Static />
					</div>
				</div>
			</div>
		);
	}
}
