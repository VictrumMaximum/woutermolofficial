import * as React from "react";

const style = require("../styles/menuBar.less");

interface OptionProps {
    title: string;
}

export default class Option extends React.Component<OptionProps, {}> {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={"col-2 " + style.noselect}>
                {this.props.title}
            </div>
        );
    }
}
