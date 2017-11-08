import * as React from "react";

const style = require("./styles/menuBar.less");

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
                {this.props.title}
            </div>
        );
    }
}
