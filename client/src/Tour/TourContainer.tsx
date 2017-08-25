import * as React from "react";
import TourMenu from "./TourMenu";
import TourList from "./TourList";

export default class TourContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TourMenu/>
				<TourList/>
			</div>
		);
	}
}
