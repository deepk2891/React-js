import React, { useState } from "react"

const AddFood = ({ onAddFood }) => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		image: "",
		price: "",
	})
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		const newFood = {
			id: Math.floor(Math.random() * 1000),
			...formData,
		}
		onAddFood(newFood)
		setFormData({
			name: "",
			category: "",
			image: "",
			price: "",
		})
	}

	return (
		<div className="container mx-auto p-4">
			<div className="w-1/3">
				<h2>Add New Food</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="category" className="leading-7 text-sm text-gray-600">
							Category:
						</label>
						<select
							id="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							className="block w-full p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
							required
						>
							<option disabled>Select Category</option>
							<option value="burger">Burger</option>
							<option value="pizza">Pizza</option>
							<option value="pasta">Pasta</option>
							<option value="salad">Salad</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-600">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="image" className="leading-7 text-sm text-gray-600">
							Image URL:
						</label>
						<input
							type="text"
							id="image"
							name="image"
							value={formData.image}
							onChange={handleChange}
							placeholder="Give me valid URL"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="price" className="leading-7 text-sm text-gray-600">
							Price:
						</label>
						<input
							type="number"
							id="price"
							name="price"
							value={formData.price}
							onChange={handleChange}
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							required
						/>
					</div>
					<button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Add Food
					</button>
				</form>
			</div>
		</div>
	)
}

export default AddFood
