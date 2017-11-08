import * as React from "react";
import Option from "./Option";

const options = require("./menuOptions").default;

export default class Menu extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (

				<div className="col-md-10">
					<div className="row justify-content-center">
						{Object.keys(options).map((option) => {
							return <Option title={options[option].title} route={options[option].route}/>
						})}
					</div>
				</div>
        );
    }
}
