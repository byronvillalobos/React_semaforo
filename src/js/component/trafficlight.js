import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { useState } from "react";

export function TrafficLight(props) {
	let [redlight, setredlight] = useState("turnedoff");
	let [yellowlight, setyellowlight] = useState("turnedoff");
	let [greenlight, setgreenlight] = useState("turnedoff");

	function stopchange() {
		if (redlight == "turnedoff") {
			setredlight("turnedon");
			setyellowlight("turnedoff");
			setgreenlight("turnedoff");
		}
	}
	function warningchange() {
		if (yellowlight == "turnedoff") {
			setredlight("turnedoff");
			setyellowlight("turnedon");
			setgreenlight("turnedoff");
		}
	}
	function runchange() {
		if (greenlight == "turnedoff") {
			setredlight("turnedoff");
			setyellowlight("turnedoff");
			setgreenlight("turnedon");
		}
	}
	return (
		<div className="text-center mt-5">
			<button onClick={setredlight}>{redlight}</button>
			<button onClick={setyellowlight}>{yellowlight}</button>
			<button onClick={setgreenlight}>{greenlight}</button>
		</div>
	);
}

ReactDOM.render(<TrafficLight />, document.querySelector("#myDiv"));

export default TrafficLight;
