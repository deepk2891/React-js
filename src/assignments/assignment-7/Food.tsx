import React, { useState } from "react"

interface FoodProps {
	foods: {
		id: number
		name: string
		category: string
		image: string
		price: number | string
	}[]
}

const Food: React.FC<FoodProps> = ({ foods }) => {
	const [filteredFoods, setFilteredFoods] = useState(foods)

	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(600)

	const filterType = (category: string) => {
		if (category === "All") {
			setFilteredFoods(foods)
		} else {
			const filtered = foods.filter((item) => item.category === category)
			setFilteredFoods(filtered)
		}
	}

	const filterPrice1 = (priceRange: string) => {
		if (priceRange === "All") {
			setFilteredFoods(foods)
		} else {
			const [min, max] = priceRange.split("-").map(Number)
			const filtered = foods.filter((item) => {
				const itemPrice = typeof item.price === "string" ? parseInt(item.price, 10) : item.price
				return itemPrice >= min && itemPrice <= max
			})
			setFilteredFoods(filtered)
		}
	}

	const filterPrice = (min: number, max: number) => {
		const filtered = foods.filter((item) => {
			const itemPrice = typeof item.price === "string" ? parseInt(item.price, 10) : item.price
			return itemPrice >= min && itemPrice <= max
		})
		setFilteredFoods(filtered)
	}

	return (
		<>
			<div className="container mx-auto px-4 py-12">
				<h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
				<div className="flex flex-col lg:flex-row justify-between">
					<div>
						<p className="font-bold text-gray-700">Filter Type</p>
						<div className="flex justfiy-between flex-wrap">
							<button onClick={() => setFilteredFoods(foods)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								All
							</button>
							<button onClick={() => filterType("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								Burgers
							</button>
							<button onClick={() => filterType("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								Pizza
							</button>
							<button onClick={() => filterType("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								Salads
							</button>
							<button onClick={() => filterType("pasta")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								Pasta
							</button>
						</div>
					</div>
					{/* <div className="font-bold text-gray-700">
						<p className="font-bold text-gray-700">Search Name</p>
						<input
							onChange={(e) => {
								filterName(e.target.value)
							}}
							type="text"
							id="name"
							name="name"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-2 leading-8"
						/>
					</div> */}
					<div>
						<p className="font-bold text-gray-700">Filter Price</p>
						<div className="flex justify-between max-w-[390px] w-full">
							<button onClick={() => filterPrice1("All")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								All
							</button>
							<button onClick={() => filterPrice1("0-250")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								0-250
							</button>
							<button onClick={() => filterPrice1("250-500")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								250-500
							</button>
							<button onClick={() => filterPrice1("500-750")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								500-750
							</button>
							<button onClick={() => filterPrice1("750-1000")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								750-1000
							</button>
							<button onClick={() => filterPrice1("1000-1250")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
								1000-1250
							</button>
						</div>
					</div>
					<div>
						<p className="font-bold text-gray-700">Filter Price</p>
						<div>
							<label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Min-max range
							</label>
							<input
								onChange={(e) => {
									setMaxPrice(parseInt(e.target.value, 10))
									filterPrice(minPrice, parseInt(e.target.value, 10))
								}}
								type="range"
								min={0}
								max={1250}
								defaultValue={250}
								className="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
					{filteredFoods.map((item, index) => (
						<div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
							<img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
							<div className="flex justify-between px-2 py-4">
								<p className="font-bold">{item.name}</p>
								<p>
									<span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Food
