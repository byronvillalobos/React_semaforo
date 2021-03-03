import React from "react";

//include images into your bundle
import TrafficLight from "./trafficlight.js";

//create your first component
export function Home() {
	return (
		<div id="myDiv">
			<TrafficLight />
		</div>
	);
}
