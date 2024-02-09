import React, { useState, useEffect } from "react"
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"

const Crud1 = () => {
	const [input, setInput] = useState({})
	const [edit, setEdit] = useState(false)
	const [id, setId] = useState()
	const [products, setProduct] = useState(() => {
		return JSON.parse(localStorage.getItem("products")) || []
	})

	useEffect(() => {
		console.log("hello")
		localStorage.setItem("products", JSON.stringify(products))
	}, [products])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (edit) {
			var pro = [...products]
			pro[id] = input
			setEdit(false)
			setProduct(pro)
		} else {
			setProduct([...products, input])
		}
		setInput({})
	}

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleDelete = (id) => {
		var pro = [...products]
		pro.splice(id, 1)
		setProduct(pro)
	}
	const handleEdit = (id) => {
		setInput(products[id])
		setEdit(true)
		setId(id)
	}

	return (
		<>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row text-lg">
					<div className="text-center xl:w-2/5 p-4">
						<h2 className="text-indigo-600 font-medium text-2xl pb-5">User Detail</h2>
						<form action="" onSubmit={handleSubmit}>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								value={input.name || ""}
								onChange={handleChange}
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
							/>
							<input
								type="text"
								name="email"
								placeholder="Enter your Email"
								value={input.email || ""}
								onChange={handleChange}
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
							/>
							<div className="flex items-center flex-wrap mb-4">
								<label className="mr-4">Gender : </label>
								<label>
									<input type="radio" id="male" name="gender" value="Male" className="mr-1 incline-block" /> Male
								</label>
								<label>
									<input type="radio" id="female" name="gender" value="Female" className="ml-4 mr-1 incline-block" /> Female
								</label>
							</div>
							<div className="mb-4">
								<div className="flex items-center flex-wrap">
									<label className="mr-4">Hobbies : </label>
									<label className="mr-4">
										<input type="checkbox" id="driving" name="hobbies" value="Driving" className="mr-1" /> Driving
									</label>
									<label className="mr-4">
										<input type="checkbox" id="cycling" name="hobbies" value="Cycling" className="mr-1" /> Cycling
									</label>
									<label>
										<input type="checkbox" id="coding" name="hobbies" value="Coding" className="mr-1" /> Flying
									</label>
								</div>
							</div>
							<div className="mb-4">
								<select name="course" id="course" className="block w-full p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none">
									<option value="" disabled>
										Select a course
									</option>
									<option value="full-stack">Full Stack</option>
									<option value="android">Android</option>
									<option value="animation">Animation</option>
									<option value="figma">Figma</option>
								</select>
							</div>
							<textarea
								className="block h-24 w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none resize-none"
								placeholder="Enter your Address"
								required
							></textarea>
							<button className="block w-full border border-indigo-500 text-lg py-2 px-6 bg-indigo-600 text-white hover:bg-white hover:text-indigo-400">{edit ? "UPDATE" : "ADD"}</button>
						</form>
					</div>
					<div className="text-center xl:w-3/5 p-4">
						<h2 className="text-indigo-600 font-medium text-2xl pb-5">User Table</h2>
						<table className="table-auto w-full">
							<thead>
								<tr>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Name</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Email</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Password</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Gender</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Course</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Hobbies</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Address</th>
									<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product, index) => (
									<tr key={index}>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">{product.name}</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">{product.email}</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">XXX</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">XXX</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">XXX</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">XXX</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">XXX</td>
										<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">
											<div className="flex justify-center">
												<button onClick={() => handleEdit(index)} className="bordertext-lg p-2 bg-blue-600 text-white hover:bg-white hover:border-blue-500 hover:text-blue-400">
													<FaRegEdit />
												</button>
												<button onClick={() => handleDelete(index)} className="border border-red-500 text-lg p-2 bg-red-600 text-white hover:bg-white hover:text-red-400">
													<MdDeleteOutline />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default Crud1
