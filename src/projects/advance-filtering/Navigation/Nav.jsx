import React from "react"
import "./Nav.css"
import { AiOutlineShoppingCart, AiOutlineUserAdd, FiHeart, FaBars } from "react-icons/ai"

const Nav = () => {
	return (
		<>
			<nav className="py-4">
				<div className="container mx-auto flex justify-between align-middle">
					<input
						type="text"
						placeholder="search Footwear"
						className="w-40 md:w-72 text-lg h-8 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 px-4 py-5 leading-8 transition-colors duration-200 ease-in-out"
					/>
					<div className="align-middle mt-3 text-xl md:text-2xl hidden md:block">
						<div className="flex space-x-6">
							<a href="#">
								<FiHeart className="nav-icons" />
							</a>
							<a href="#">
								<AiOutlineShoppingCart className="nav-icons" />
							</a>
							<a href="#">
								<AiOutlineUserAdd className="nav-icons" />
							</a>
						</div>
					</div>
					<div className="mt-3 text-xl block md:hidden">
						<FaBars />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav
