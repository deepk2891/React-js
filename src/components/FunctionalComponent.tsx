import React from "react"

interface FunctionalComponentProps {
	message: string
}

const FunctionalComponent = ({ message }: FunctionalComponentProps) => {
	return (
		<>
			<h1 className="font-semibold text-3xl pt-4">Functional Component</h1>
			<p>{message}</p>
		</>
	)
}

export default FunctionalComponent
