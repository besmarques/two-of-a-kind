import React from "react";

const TwoOfaKind = () => {
	/*let game = 30;
	let rows = 0;
	let whatRow = 0;

	for (let i = 0; i < game; i++) {
		if (i % 5 != 0) {
			let col = document.createElement("col");
			col.innerHTML = "sim";
			col.classList.add("col-1 card");
			document.getElementById(whatRow).appendChild(col);
		} else {
			let row = document.createElement("row");
			let col = document.createElement("col");
			row.setAttribute("id", "row" + rows);
			col.innerHTML = "nao";
			col.classList.add("col-1 card");
			document
				.getElementById("gamearea")
				.appendChild(row)
				.appendChild(col);
			whatRow = "row" + rows;
			rows++;
		}
	}*/

	function play() {}

	return (
		<>
			<div id="gamearea" className="container">
				<div className="row container justify-content-center">
					<button className="col-1 card m-2" id="pos1-1">
						1
					</button>
					<button className="col-1 card m-2" id="pos1-2">
						2
					</button>
					<button className="col-1 card m-2" id="pos1-3">
						3
					</button>
					<button className="col-1 card m-2" id="pos1-4">
						4
					</button>
					<button className="col-1 card m-2" id="pos1-5">
						5
					</button>
				</div>
				<div className="row container justify-content-center">
					<button className="col-1 card m-2 text-center" id="pos2-1">
						6
					</button>
					<button className="col-1 card m-2" id="pos2-2">
						7
					</button>
					<button className="col-1 card m-2" id="pos2-3">
						8
					</button>
					<button className="col-1 card m-2" id="pos2-4">
						9
					</button>
					<button className="col-1 card m-2" id="pos2-5">
						10
					</button>
				</div>
				<div className="row container justify-content-center">
					<button className="col-1 card m-2" id="pos3-1">
						11
					</button>
					<button className="col-1 card m-2" id="pos3-2">
						12
					</button>
					<button className="col-1 card m-2" id="pos3-3">
						13
					</button>
					<button className="col-1 card m-2" id="pos3-4">
						14
					</button>
					<button className="col-1 card m-2" id="pos3-5">
						15
					</button>
				</div>
				<div className="row container justify-content-center">
					<button className="col-1 card m-2" id="pos4-1">
						16
					</button>
					<button className="col-1 card m-2" id="pos4-2">
						17
					</button>
					<button className="col-1 card m-2" id="pos4-3">
						18
					</button>
					<button className="col-1 card m-2" id="pos4-4">
						19
					</button>
					<button className="col-1 card m-2" id="pos4-5">
						20
					</button>
				</div>
				<div className="row container justify-content-center">
					<button className="col-1 card m-2" id="pos5-1">
						21
					</button>
					<button className="col-1 card m-2" id="pos5-2">
						22
					</button>
					<button className="col-1 card m-2" id="pos5-3">
						23
					</button>
					<button className="col-1 card m-2" id="pos5-4">
						24
					</button>
					<button className="col-1 card m-2" id="pos5-5">
						25
					</button>
				</div>
				<div className="row container justify-content-center">
					<button className="col-1 card m-2" id="pos6-1">
						26
					</button>
					<button className="col-1 card m-2" id="pos6-2">
						27
					</button>
					<button className="col-1 card m-2" id="pos6-3">
						28
					</button>
					<button className="col-1 card m-2" id="pos6-4">
						29
					</button>
					<button className="col-1 card m-2" id="pos6-5">
						20
					</button>
				</div>
			</div>
		</>
	);
};

export default TwoOfaKind;
