import React, { useState } from "react"

const data = [
	{
		id: 1,
		name: "Double Cheeseburger",
		category: "burger",
		image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
		price: 249,
	},
	{
		id: 2,
		name: "Vada pav",
		category: "burger",
		image: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnJTIwYnVyZ2VyfGVufDB8fDB8fHww",
		price: 499,
	},
	{
		id: 3,
		name: "Mushroom Burger",
		category: "burger",
		image: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
		price: 749,
	},
	{
		id: 4,
		name: "Loaded Burger",
		category: "burger",
		image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
		price: 999,
	},
	{
		id: 5,
		name: "Feta & Spinnach",
		category: "pizza",
		image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: 1099,
	},
	{
		id: 6,
		name: "Supreme Pizza",
		category: "pizza",
		image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: "699",
	},
	{
		id: 7,
		name: "Meat Lovers",
		category: "pizza",
		image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
		price: 249,
	},
	{
		id: 8,
		name: "Cheese Pizza",
		category: "pizza",
		image: "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: 499,
	},
	{
		id: 9,
		name: "Kale Salad",
		category: "salad",
		image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: 749,
	},
	{
		id: 10,
		name: "Ceasar Salad",
		category: "salad",
		image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: 999,
	},
	{
		id: 11,
		name: "Loaded Salad",
		category: "salad",
		image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		price: 1099,
	},
	{
		id: 12,
		name: "Fruit Salad",
		category: "salad",
		image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
		price: 249,
	},
	{
		id: 13,
		name: "Wings",
		category: "pasta",
		image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 499,
	},
	{
		id: 14,
		name: "Baked Chicken",
		category: "pasta",
		image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3RhfGVufDB8fDB8fHww",
		price: 749,
	},
	{
		id: 15,
		name: "Chicken Tenders",
		category: "pasta",
		image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdGF8ZW58MHx8MHx8fDA%3D",
		price: 999,
	},
	{
		id: 16,
		name: "Chicken Kabob",
		category: "pasta",
		image: "https://media.istockphoto.com/id/862762848/photo/pasta-in-a-cast-iron-pan-shot-on-rustic-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=u7Kpzb0C5z5mlyAXJ297bg-tiyFxmQikRDHRm0Jdm64=",
		price: 1099,
	},
]

const Food = () => {
	const [foods, setFoods] = useState(data)

	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(1250)

	// Filter Type Burger/pizza/etc
	const filterType = (category) => {
		if (category === "All") {
			setFoods(data) // Show all items
		} else {
			const filteredFoods = data.filter((item) => item.category === category)
			setFoods(filteredFoods)
		}
	}

	// Filter by Price
	const filterPrice1 = (price) => {
		if (price === "All") {
			setFoods(data)
		} else {
			const [min, max] = price.split("-").map(Number)
			const filteredFoods = data.filter((item) => {
				const itemPrice = item.price
				return itemPrice >= min && itemPrice <= max
			})
			setFoods(filteredFoods)
		}
	}

	const filterPrice = (min, max) => {
		const filteredFoods = data.filter((item) => {
			const itemPrice = typeof item.price === "string" ? parseInt(item.price, 5) : item.price
			return itemPrice >= min && itemPrice <= max
		})
		setFoods(filteredFoods)
	}

	return (
		<>
			<div className="container mx-auto px-4 py-12">
				<h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
				<div className="flex flex-col lg:flex-row justify-between">
					<div>
						<p className="font-bold text-gray-700">Filter Type</p>
						<div className="flex justfiy-between flex-wrap">
							<button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
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
					{foods.map((item, index) => (
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
