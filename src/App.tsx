import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import App1 from "./assignments/assignment-1/App1"
import App2 from "./assignments/assignment-2/App2"
import App3 from "./assignments/assignment-3/App3"
import App4 from "./assignments/assignment-4/App4"
import App5 from "./assignments/assignment-5/App5"
import App6 from "./assignments/assignment-6/App6"

import ListGroup from "./components/ListGroup"
import ParentComponent from "./components/ParentComponent"
import ProductList from "./components/ProductList"
import ClassBasedComponent from "./components/ClassBasedComponent"
import FunctionalComponent from "./components/FunctionalComponent"
import StateFunctionalComponent from "./components/StateFunctionalComponent"
import StateClassComponent from "./components/StateClassComponent"
import List from "./components/List"
import LocalStorage from "./components/LocalStorage"

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/assignment-1" element={<App1 />} />
				<Route path="/assignment-2" element={<App2 />} />
				<Route path="/assignment-3" element={<App3 />} />
				<Route path="/assignment-4" element={<App4 />} />
				<Route path="/assignment-5" element={<App5 />} />
				<Route path="/assignment-6" element={<App6 />} />
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
							<LocalStorage />
						</>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
