import React from "react"

const Cart = () => {
	return (
		<div>
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
		</div>
	)
}

export default Cart
