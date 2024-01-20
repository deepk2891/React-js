import React, { useState } from "react"

const StateFunctionalComponent = () => {
	const [count, setCount] = useState(0)

	const incrementCounter = () => {
		setCount(count + 1)
	}

	const decrementCounter = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	return (
		<div>
			<h2 className="font-semibold text-3xl pt-4">StateFunctionalComponent</h2>
			<p>Count: {count}</p>

			<button onClick={incrementCounter}>Increment</button>
			<button onClick={decrementCounter}>Decrement</button>
		</div>
	)
}

export default StateFunctionalComponent
