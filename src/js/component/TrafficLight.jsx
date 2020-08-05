import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		console.log(this.state);
		let readExtraClass = "";
		if (this.state.clickedLight == "red") readExtraClass = "selected";
		console.log("read" + readExtraClass);
		let yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		console.log("yellow" + yellowExtraClass);
		let greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";
		console.log("green" + greenExtraClass);
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + readExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
