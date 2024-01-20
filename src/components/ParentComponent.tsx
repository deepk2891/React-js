import React from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
	return (
		<>
			<br />
			<h3 className="font-semibold text-3xl pt-4">ParentComponent</h3>
			<ChildComponent name="Deep" age={20} />
		</>
	)
}

export default ParentComponent
