import * as React from "react";

const style = require("./menuBar.less");

interface OptionProps {
    title: string;
    route: string;
}

export default class Option extends React.Component<OptionProps, {}> {
    constructor(props) {
        super(props);
    }

    onClick(route) {
		window.location.href = "/" + route;
	}
    
    render() {
        return (
            <div className={"col-2 " + style.menuOption} onClick={() => {this.onClick(this.props.route)}}>
				<h3>{this.props.title}</h3>
            </div>
        );
    }
}
