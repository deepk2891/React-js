import React, { useState } from "react"

const List = () => {
	const [list1] = useState(["C", "JAVA", "C++", "JAVASCRIPT"])
	const [list2] = useState(["REACT", "MONGODB", "NODEJS", "EXPRESSJS"])

	return (
		<>
			<h2 className="font-semibold text-3xl pt-4">List</h2>
			<ul className="pt-3">
				{list1.map((list, index) => (
					<li key={index}>
						{index}&nbsp;&nbsp;
						{list}
					</li>
				))}
			</ul>
			<ul className="pt-3">
				{list2.map((list, index) => (
					<li key={index}>
						{index}&nbsp;&nbsp;
						{list}
					</li>
				))}
			</ul>
		</>
	)
}

export default List
