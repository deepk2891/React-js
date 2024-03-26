import React, { useEffect, useState } from "react"
import { database } from "./firebase"
import { ref, set, push, onValue, get, update, remove } from "firebase/database"

const FirebaseProducts = () => {
	const [input, setInput] = useState({})
	const [users, setUser] = useState()
	const [id, setId] = useState()
	const [edit, isEdit] = useState(false)

	useEffect(() => {
		const userRef = ref(database, "users")
		onValue(userRef, (snapshot) => {
			var list = []
			snapshot.forEach((childSnapshot) => {
				var id = childSnapshot.key
				var data = childSnapshot.val()
				var detail = { id, ...data }
				list.push(detail)
			})
			setUser(list)
		})
	}, [])

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (edit) {
			const userRef = ref(database, `users/${id}`)
			update(userRef, input).then(() => {
				console.log("Updated.....")
				setInput({})
				isEdit(false)
			})
		} else {
			const userRef = ref(database, "users")
			const newUser = push(userRef)
			set(newUser, input)
		}
	}

	const handleEdit = (id) => {
		const userRef = ref(database, `users/${id}`)
		get(userRef).then((user) => {
			var userData = user.val()
			setInput(userData)
			setId(id)
			isEdit(true)
		})
	}

	const handleDelete = (id) => {
		const userRef = ref(database, `users/${id}`)
		remove(userRef).then(() => {
			console.log("Delete...")
		})
	}

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-center">
				<div className="w-1/2 p-4 border border-gray-300">
					<h1 className="text-2xl mb-4">User Form</h1>
					<form onSubmit={handleSubmit}>
						<label className="block mb-2">Name</label>
						<input type="text" name="name" placeholder="Enter your name" onChange={handleChange} value={input.name || ""} className="w-full p-2 border border-gray-300 rounded mb-4" />
						<label className="block mb-2">Email</label>
						<input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} value={input.email || ""} className="w-full p-2 border border-gray-300 rounded mb-4" />
						<label className="block mb-2">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Enter Your Password"
							onChange={handleChange}
							value={input.password || ""}
							className="w-full p-2 border border-gray-300 rounded mb-4"
						/>
						<button className="btn btn-outline-success mt-3">{edit ? "UPDATE" : "SUBMIT"}</button>
					</form>
				</div>
				<div className="w-1/2 p-4">
					<h1 className="text-2xl mb-4">User Data</h1>
					<table className="table-auto w-full border border-gray-300">
						<thead>
							<tr>
								<th className="border border-gray-300">ID</th>
								<th className="border border-gray-300">Name</th>
								<th className="border border-gray-300">Email</th>
								<th className="border border-gray-300">Action</th>
							</tr>
						</thead>
						<tbody>
							{users?.map((user) => (
								<tr key={user.id}>
									<td className="border border-gray-300">{user.id}</td>
									<td className="border border-gray-300">{user.name}</td>
									<td className="border border-gray-300">{user.email}</td>
									<td className="border border-gray-300">
										<button className="mr-2" onClick={() => handleEdit(user.id)}>
											EDIT
										</button>
										<button onClick={() => handleDelete(user.id)}>DELETE</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default FirebaseProducts
