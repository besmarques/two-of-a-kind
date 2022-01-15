import React from "react";

const TwoOfaKind = () => {
	let game = 30;
	let rows = 0;
	let whatRow = 0;

	for (let i = 0; i < game; i++) {
		if (i % 5 != 0) {
			let col = document.createElement("col");
			col.innerHTML = "sim";
			col.classList.add("col-1");
			document.getElementById(whatRow).appendChild(col);
		} else {
			let row = document.createElement("row");
			let col = document.createElement("col");
			row.setAttribute("id", "row" + rows);
			col.innerHTML = "nao";
			col.classList.add("col-1");
			document
				.getElementById("gamearea")
				.appendChild(row)
				.appendChild(col);
			whatRow = "row" + rows;
			rows++;
		}
	}

	return (
		<>
			<container id="gamearea"></container>
		</>
	);
};

export default TwoOfaKind;
