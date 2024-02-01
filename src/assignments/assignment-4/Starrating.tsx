import React from "react"
import { FaStar } from "react-icons/fa"
import "./style.css"

const Starrating: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
	return (
		<div className="star-rating">
			{[1, 2, 3, 4, 5].map((index) => (
				<label key={index} className={`star ${index <= value ? "on" : "off"}`}>
					<input type="radio" name="rating" value={index} checked={index === value} onChange={() => onChange(index)} />
					<span className="star text-2xl">
						<FaStar className="inline" />
					</span>
				</label>
			))}
		</div>
	)
}

export default Starrating
