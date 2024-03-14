import React, { useState } from "react"

import { IoCartOutline } from "react-icons/io5"
import { FaTrashAlt } from "react-icons/fa"

import data from "./FootData"
import { Link } from "react-router-dom"

type FoodItem = (typeof data)[number]

const Food = () => {
	const [foods, setFoods] = useState(data)
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(1250)
	const [cart, setCart] = useState<{ item: FoodItem; quantity: number }[]>([])

	// Function to add item to cart
	const addToCart = (item: FoodItem) => {
		const existingItem = cart.find((cartItem) => cartItem.item.id === item.id)
		if (existingItem) {
			const updatedCart = cart.map((cartItem) => (cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
			setCart(updatedCart)
		} else {
			setCart([...cart, { item, quantity: 1 }])
		}
	}

	// Function to remove item
	const removeItem = (item: FoodItem) => {
		const updatedCart = cart.filter((cartItem) => cartItem.item.id !== item.id)
		setCart(updatedCart)
	}

	// Function to increment quantity
	const incrementQuantity = (item: FoodItem) => {
		const updatedCart = cart.map((cartItem) => (cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
		setCart(updatedCart)
	}

	// Function to decrement quantity
	const decrementQuantity = (item: FoodItem) => {
		const updatedCart = cart.map((cartItem) => (cartItem.item.id === item.id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
		setCart(updatedCart)
	}

	// Calculate total price for an item
	const calculateTotalPrice = (item: FoodItem) => {
		const cartItem = cart.find((cartItem) => cartItem.item.id === item.id)
		return cartItem ? (cartItem.quantity * Number(item.price)).toFixed(2) : "0.00"
	}

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

	// Search Name
	const filterName = (name) => {
		const filteredFoods = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
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
					<div className="font-bold text-gray-700">
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

				<div className="flex flex-row justify-end mt-5">
					<a href="#cart" className="py-4 px-4 bg-orange-400 flex justify-center gap-2 items-center text-black  text-xl rounded-lg">
						<IoCartOutline className="text-2xl" />
						<span className="cartCounter">{cart.length}</span>
					</a>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
					{foods.map((item, index) => (
						<div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
							<img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
							<div className="flex items-center justify-between px-2 py-4">
								<p className="font-bold">{item.name}</p>
								<p>
									<span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
								</p>
								<button onClick={() => addToCart(item)} className="p-2 bg-orange-500 text-white rounded-lg hover:scale-110 transition-all">
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<h1 className="text-3xl font-bold text-orange-400 text-center mb-7">Cart</h1>
			<div id="cart" className="Cart Items flex flex-col max-w-96 gap-6 pt-4">
				{cart.map((cartItem, index) => (
					<div key={index} className="border shadow-lg rounded-lg">
						<div className="flex items-center justify-between px-2 py-4">
							<img src={cartItem.item.image} alt={cartItem.item.name} className="w-20 h-16 object-cover rounded-t-lg" />
							<p className="font-bold">{cartItem.item.name}</p>
							<p>
								<span className="bg-orange-500 text-white p-1 rounded-full">{calculateTotalPrice(cartItem.item)}</span>
							</p>
							<div className="flex flex-row items-center">
								<button onClick={() => incrementQuantity(cartItem.item)} className="bg-orange-500 text-white rounded-lg px-2 py-1">
									+
								</button>
								<span>{cartItem.quantity}</span>
								<button onClick={() => decrementQuantity(cartItem.item)} className="bg-orange-500 text-white rounded-lg px-2 py-1">
									-
								</button>
								<button onClick={() => removeItem(cartItem.item)}>
									<FaTrashAlt />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Food
