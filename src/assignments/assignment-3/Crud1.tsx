import React, { useState, useEffect } from "react"

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
			setProduct(pro)
		} else {
			setProduct([...products, input])
		}
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
			<h1>Products</h1>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={input.name || ""}
					onChange={handleChange}
					className="block w-60 mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
				/>
				<input
					type="text"
					name="price"
					value={input.price || ""}
					onChange={handleChange}
					className="block w-60 mb-4 p-2 border border-gray-500 rounded-none focus:ring focus:ring-indigo-300 focus:outline-none"
				/>
				<button className="block w-60 border border-indigo-500 text-lg py-2 px-6 bg-indigo-600 text-white hover:bg-white hover:text-indigo-400">{edit ? "UPDATE" : "ADD"}</button>
			</form>
			<table className="table-auto">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<tr key={index}>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>
								<button onClick={() => handleDelete(index)}>Delete</button>
							</td>
							<td>
								<button onClick={() => handleEdit(index)}>Edit</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Crud1
