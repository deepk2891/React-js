import React, { useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"

const Crud = () => {
	return (
		<>
			<h1 className="py-5 text-center text-2xl font-semibold border-b-2">CRUD</h1>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row text-lg">
					<div className="text-center xl:w-2/5 p-4">
						<div>
							<h2 className="text-indigo-600 font-medium text-2xl pb-5">User Detail</h2>
							<input
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
								type="text"
								placeholder="Enter your name"
								required
								id="userName"
							/>
							<input
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
								type="email"
								pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
								placeholder="Enter your email"
								required
								id="userEmail"
							/>
							<input
								className="block w-full mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
								type="password"
								placeholder="Enter your password"
								required
								id="userPassword"
							/>
							{/* <div className="flex items-center flex-wrap mb-4">
								<label className="mr-4">Gender : </label>
								<label>
									<input type="radio" id="male" name="gender" value="Male" className="mr-1" /> Male
								</label>
								<label>
									<input type="radio" id="female" name="gender" value="Female" className="ml-4 mr-1" /> Female
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
							</div> */}
							<p id="InputIsEmptyMessage" className="text-left text-red-600 text-xl"></p>
							<button type="button" className="block w-full border border-indigo-500 text-lg py-2 px-6 bg-indigo-600 text-white hover:bg-white hover:text-indigo-400">
								Add user
							</button>
						</div>
					</div>

					<div className="xl:w-3/5 p-4">
						<div className="text-center">
							<h2 className="text-indigo-600 font-medium text-2xl pb-5">User Table</h2>
							<div className="table-container overflow-x-auto">
								<table className="table-auto border border-gray-500 mx-auto w-full">
									<thead>
										<tr>
											<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">UserName</th>
											<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">Email</th>
											<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">Password</th>
											{/* <th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">Gender</th> */}
											{/* <th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">Hobbies</th> */}
											{/* <th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">course</th> */}
											<th className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 px-2 py-2">Actions</th>
										</tr>
									</thead>
									<tbody className="js-user-list">
										<tr>
											<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">example</td>
											<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">example</td>
											<td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">example</td>
											{/* <td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">example</td> */}
											{/* <td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">example</td> */}
											{/* <td className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 border border-gray-500 p-2">example</td> */}
											<td>
												<div className="flex justify-center">
													<button className="border border-blue-500 text-lg p-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400">
														<FaRegEdit />
													</button>
													<button className="border border-red-500 text-lg p-2 bg-red-600 text-white hover:bg-white hover:text-red-400">
														<MdDeleteOutline />
													</button>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Crud
