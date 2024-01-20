import React from "react"
import { products } from "../constants"

function ProductList() {
	return (
		<div>
			<h2 className="font-semibold text-3xl pt-4">Product List using Constants</h2>
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						<p>Name: {product.name}</p>
						<p>Price: {product.price}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductList
