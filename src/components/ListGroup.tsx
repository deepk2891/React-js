import React, { useState } from "react"

function ListGroup() {
	let items = ["New York", "Tokyo", "London", "Paris", "California"]
	// Hook
	const [selectedIndex, setSelectedIndex] = useState(-1)

	return (
		<>
			<h1 className="font-semibold text-3xl pt-4">List</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
						key={item}
						onClick={() => {
							setSelectedIndex(index)
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	)
}

export default ListGroup
