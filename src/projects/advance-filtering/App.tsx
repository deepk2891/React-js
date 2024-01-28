import React from "react"
import "./App.css"
import Nav from "./Navigation/Nav"
import Sidebar from "./Sidebar/Sidebar"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"

const App = () => {
	return (
		<>
			<Sidebar />
			<Nav />
			<Recommended />
			<Products />
		</>
	)
}

export default App
