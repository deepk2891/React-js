import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./style.css"

interface Testimonial {
	name: string
	rating: number
	message: string
}
const App4 = () => {
	const [formData, setFormData] = useState({
		name: "",
		rating: 4,
		message: "",
	})

	const [testimonials, setTestimonials] = useState([])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const newTestimonial = {
			name: formData.name,
			rating: formData.rating,
			message: formData.message,
		}

		if (!formData.name || !formData.message || formData.rating === undefined) {
			alert("Please fill in all required fields (Name, Rating, and Message).")
			return
		}

		setTestimonials([...testimonials, newTestimonial])

		setFormData({ name: "", rating: 0, message: "" })
	}

	const generateStars = (rating) => {
		return Array.from({ length: rating }, (_, index) => <FaStar key={index} className="inline" />)
	}

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl py-5 text-center font-semibold text-indigo-600">Send us Feedback</h1>
			<div className="flex flex-wrap">
				<form className="w-full lg:w-1/2 p-5" onSubmit={handleSubmit}>
					<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
					<div className="mb-4">
						<label className="leading-7 text-sm text-gray-600">Name</label>
						<input
							type="text"
							name="name"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={handleInputChange}
							value={formData.name}
						/>
					</div>
					<div className="mb-4">
						<label className="leading-7 text-sm text-gray-600">Rating</label>
						{[1, 2, 3, 4, 5].map((index) => (
							<label key={index} className={`star ${index <= formData.rating ? "on" : "off"}`}>
								<input type="radio" name="rating" className="hidden" value={index} checked={index === formData.rating} onChange={() => setFormData({ ...formData, rating: index })} />
								<span className="star text-2xl">
									<FaStar className="inline mx-1" />
								</span>
							</label>
						))}
					</div>
					<div className="mb-4">
						<label className="leading-7 text-sm text-gray-600">Message</label>
						<textarea
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							onChange={handleInputChange}
							value={formData.message}
						/>
					</div>
					<button type="submit" className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Submit
					</button>
					<p className="text-xs text-gray-500 mt-3">Thank you for your response, we will contact you as soon as possible if you have any queries.</p>
				</form>
				<div className="w-full lg:w-1/2 p-5">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-gray-100 p-8 my-4 rounded">
							<p className="leading-relaxed mb-6">{testimonial.message}</p>
							<div className="inline-flex align-middle">
								<img src="https://dummyimage.com/60x60/ce4c4c/000" className="rounded-full" alt="" />
								<p className="flex flex-col justify-center gap-1 align-middle pl-4">
									<span className="title-font font-medium text-gray-900">{testimonial.name}</span>
									<span className="text-sm flex"> {generateStars(testimonial.rating)}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App4
