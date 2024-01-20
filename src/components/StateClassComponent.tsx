import React, { Component } from "react"

interface State {
	count: number
} //✅.tsx

class StateClassComponent extends Component<{}, State> {
	//✅<{}, State> => .tsx
	constructor(props: {}) {
		super(props)
		this.state = {
			count: 0,
		}
	}

	incrementCounter = () => {
		this.setState({ count: this.state.count + 1 })
	}

	decreaseCounter = () => {
		if (this.state.count > 0) {
			this.setState({ count: this.state.count - 1 })
		}
	}

	render() {
		return (
			<>
				<h2 className="font-semibold text-3xl pt-4">Class Counter : {this.state.count}</h2>
				<button onClick={this.incrementCounter}>Increment</button>
				<button onClick={this.decreaseCounter}>Decrease</button>
			</>
		)
	}
}

export default StateClassComponent
