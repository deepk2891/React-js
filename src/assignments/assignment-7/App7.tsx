import React, { useState } from "react"
import Food from "./Food"
import AddFood from "./AddFood"
import FoodData from "./FootData"

const App7 = () => {
	const [foods, setFoods] = useState(FoodData)

	// Function to add a new food item to the list
	const handleAddFood = (newFood) => {
		setFoods((prevFoods) => [...prevFoods, newFood])
	}

	return (
		<div>
			<AddFood onAddFood={handleAddFood} />
			<Food foods={foods} />
		</div>
	)
}

export default App7
