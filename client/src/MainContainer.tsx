import * as React from "react";
import Menu from "./MenuBar/MenuBar";
import TourContainer from "./Tour/TourContainer";

export default class MainContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-md-10">
						<Menu />
					</div>
					<div>
						<TourContainer />
					</div>
				</div>
			</div>
		);
	}
}
