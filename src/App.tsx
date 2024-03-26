import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import App1 from "./assignments/assignment-1/App1"
import App2 from "./assignments/assignment-2/App2"
import App3 from "./assignments/assignment-3/App3"
import App4 from "./assignments/assignment-4/App4"
import App5 from "./assignments/assignment-5/App5"
import App6 from "./assignments/assignment-6/App6"
import App7 from "./assignments/assignment-7/App7"
import App8 from "./assignments/assignment-8/App8"
import App10 from "./assignments/assignment-10/App10"
import App11 from "./assignments/assignment-11/App11"

import Login from "./assignments/assignment-10/Login"
import Signup from "./assignments/assignment-10/Signup"
import Home10 from "./assignments/assignment-10/Home"

import ListGroup from "./components/ListGroup"
import ParentComponent from "./components/ParentComponent"
import ProductList from "./components/ProductList"
import ClassBasedComponent from "./components/ClassBasedComponent"
import FunctionalComponent from "./components/FunctionalComponent"
import StateFunctionalComponent from "./components/StateFunctionalComponent"
import StateClassComponent from "./components/StateClassComponent"
import List from "./components/List"
import LocalStorage from "./components/LocalStorage"
import Card1 from "./components/Card1"
// import Index1 from "./components/Index1"
// import Layouts from "./components/Elements/Layouts"

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
				<Route path="/assignment-7" element={<App7 />} />
				<Route path="/assignment-8" element={<App8 />} />
				<Route path="/assignment-10" element={<App10 />} />
				<Route path="/assignment-11" element={<App11 />} />
				{/* Add more routes for other assignments if needed */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/Home10" element={<Home10 />} />
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
							<Card1 />
							{/* <Index1 /> */}
							{/* <Layouts /> */}
						</>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
