import React, { useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"

import Employees from "./Employees"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"

const App3 = () => {
	function Add() {
		const [name, setName] = useState("")
		const [email, setEmail] = useState("")
		const [password, setPassword] = useState("")
		const [address, setAddress] = useState("")

		const handleSubmit = (e) => {
			e.preventDefault()

			const ids = uuid()
			const uniqueId = ids.slice(0, 8)

			const a = name,
				b = email,
				c = password,
				d = address

			Employees.push({ id: uniqueId, Name: a, Email: b, Password: c, Address: d })

			history("/assignment-3")
		}

		let history = useNavigate()

		const handleDelete = (id) => {
			var index = Employees.map(function (e) {
				return e.id
			}).indexOf(id)
			alert(`Delete id: ${id} index: ${index}`)
			Employees.splice(index, 1)

			history("/assignment-3")
		}

		return (
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row text-lg">
					<div className="text-center xl:w-2/5 p-4">
						<form>
							<h2 className="text-indigo-600 font-medium text-2xl pb-5">User Detail</h2>
							<input
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
								type="text"
								placeholder="Enter your name"
								required
								id="userName"
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
								type="email"
								placeholder="Enter your email"
								required
								id="userEmail"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
								type="password"
								placeholder="Enter your password"
								required
								id="userPassword"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<textarea
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none resize-none"
								placeholder="Enter your Address"
								required
								id="yourTextareaId"
								onChange={(e) => setAddress(e.target.value)}
							></textarea>
							<p id="InputIsEmptyMessage" className="text-left text-red-600 text-xl"></p>
							<button
								onClick={(e) => handleSubmit(e)}
								type="button"
								className="block w-full border border-indigo-500 text-lg py-2 px-6 bg-indigo-600 text-white hover:bg-white hover:text-indigo-400"
							>
								Add user
							</button>
						</form>
					</div>
					<div className="xl:w-3/5 p-4 overflow-x-scroll xl:overflow-x-hidden">
						<h2 className="text-indigo-600 font-medium text-2xl pb-5 text-center">User Table</h2>
						<table className="">
							<thead>
								<tr>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Name</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Email</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Password</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Address</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{Employees && Employees.length > 0 ? (
									Employees.map((item) => {
										return (
											<tr key={item.id}>
												<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">{item.Name}</td>
												<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">{item.Email}</td>
												<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">{item.Password}</td>
												<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">{item.Address}</td>
												<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">
													<div className="flex justify-center">
														<button onClick={() => alert(item.id)} className="border border-blue-500 text-xl p-3 bg-blue-600 text-white hover:bg-white hover:text-blue-400">
															<FaRegEdit />
														</button>
														<button
															onClick={() => handleDelete(item.id)}
															className="border border-red-500 text-xl p-3 bg-red-600 text-white hover:bg-white hover:text-red-400"
														>
															<MdDeleteOutline />
														</button>
													</div>
												</td>
											</tr>
										)
									})
								) : (
									<tr className="text-center">No Data Available</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
	return <Add />
}
export default App3
