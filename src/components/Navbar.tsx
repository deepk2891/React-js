import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"
import { FaStaylinked } from "react-icons/fa6"

const Navbar = () => {
	return (
		<nav className="bg-gray-800">
			<ul className="flex space-x-6 text-white">
				<li className="p-4">
					<Link to="/">Home</Link>
				</li>
				<li className="relative group p-4">
					<span className="cursor-pointer whitespace-nowrap" role="button">
						Assignments <IoIosArrowDown className="inline" />
					</span>
					<ul className="absolute left-0 hidden mt-2 bg-gray-800 text-white p-4 space-y-2 group-hover:block z-10">
						<li>
							<Link to="/assignment-1" className="whitespace-nowrap">
								Assignment-1 <FaStaylinked className="inline" /> Header & Footer
							</Link>
						</li>
						<li>
							<Link to="/assignment-2" className="whitespace-nowrap">
								Assignment-2 <FaStaylinked className="inline" /> Counter
							</Link>
						</li>
						<li>
							<Link to="/assignment-3" className="whitespace-nowrap">
								Assignment-3 <FaStaylinked className="inline" /> CRUD
							</Link>
						</li>
						<li>
							<Link to="/assignment-4" className="whitespace-nowrap">
								Assignment-4 <FaStaylinked className="inline" /> Feedback Form
							</Link>
						</li>
						<li>
							<Link to="/assignment-5" className="whitespace-nowrap">
								Project <FaStaylinked className="inline" /> Product Filter
							</Link>
						</li>
						<li>
							<Link to="/assignment-6" className="whitespace-nowrap">
								Assignment-6
								<FaStaylinked className="inline" /> CRUD LocalStorage
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
