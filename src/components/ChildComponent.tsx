import React from "react"

interface ChildComponenstProps {
	name: string
	age: number
}

function ChildComponent(props: ChildComponenstProps) {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	)
}

export default ChildComponent
