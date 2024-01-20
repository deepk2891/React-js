import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import App1 from "./assignments/assignment-1/App1"
import App2 from "./assignments/assignment-2/App2"

import ListGroup from "./components/ListGroup"
import ParentComponent from "./components/ParentComponent"
import ProductList from "./components/ProductList"
import ClassBasedComponent from "./components/ClassBasedComponent"
import FunctionalComponent from "./components/FunctionalComponent"
import StateFunctionalComponent from "./components/StateFunctionalComponent"
import StateClassComponent from "./components/StateClassComponent"
import List from "./components/List"

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/assignment-1" element={<App1 />} />
				<Route path="/assignment-2" element={<App2 />} />
				{/* Add more routes for other assignments if needed */}
				<Route
					path="/"
					element={
						<>
							<ListGroup />
							<ParentComponent />
							<ProductList />
							<div>
								<ClassBasedComponent message="Hello from Class Component" />
								<FunctionalComponent message="Hello from Functional Component" />
							</div>
							<StateFunctionalComponent />
							<StateClassComponent />
							<List />
						</>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
