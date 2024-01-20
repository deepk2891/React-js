import React, { Component } from "react"

interface ClassBasesComponentProps {
	message: string
}

class ClassBasedComponent extends Component<ClassBasesComponentProps> {
	render() {
		return (
			<>
				<h1 className="font-semibold text-3xl pt-4">Class Bases Component</h1>
				<p>{this.props.message}</p>
			</>
		)
	}
}

export default ClassBasedComponent
