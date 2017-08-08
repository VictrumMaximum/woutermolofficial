import * as React from "react";
import Menu from "./Menu/Menu";

export default class MainContainer extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<Menu />
			</div>
		);
	}
}
