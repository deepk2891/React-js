import React, { useEffect, useState } from "react"

// interface Product {
// 	name: string
// 	price: number
// }

const LocalStorage = () => {
	const [products, setProduct] = useState(() => {
		return JSON.parse(localStorage.getItem("products")) || []
	})
	const handleAdd = () => {
		var x = [
			{ name: "JOTTO", price: 5000 },
			{ name: "APPO", price: 5000 },
			{ name: "MOTTO", price: 5000 },
		]
		localStorage.setItem("products", JSON.stringify(x))
	}
	return (
		<>
			<button onClick={handleAdd}>Add</button>
			<h1>Products....</h1>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products &&
						products.map((product, index) => (
							<tr key={index}>
								<td>{product.name}</td>
								<td>{product.price}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	)
}

export default LocalStorage
