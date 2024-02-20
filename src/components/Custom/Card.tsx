import React from "react"

interface Props {
	img: string[]
	amount?: number
	time?: string
	addDiv?: any
}

const Card: React.FC<Props> = (props) => {
	const { img, amount, time, addDiv } = props
	return (
		<div className="card w-[256px] rounded-2xl border-2 p-4 bg-[#282828]">
			{addDiv}
			{img.length === 1 ? (
				<img src={img[0]} alt="" className="rounded-2xl w-full" height={264} />
			) : img.length === 2 ? (
				<div className="flex justify-between">
					<div className="w-1/2 pr-3.5">
						<img src={img[0]} alt="Ex Shiba Astronaut" className="h-full" />
					</div>
					<div className="w-1/2">
						<img src={img[1]} alt="Ex Shiba Astronaut" className="h-full" />
					</div>
				</div>
			) : img.length === 3 ? (
				<div className="flex justify-between">
					<div className="w-1/2 pr-3.5">
						<img src={img[0]} alt="Ex Shiba Astronaut" className="h-full" />
					</div>
					<div className="w-1/2">
						<div className="">
							<img src={img[1]} alt="Ex Shiba Astronaut" className="h-full" />
						</div>
						<div className="">
							<img src={img[2]} alt="Ex Shiba Astronaut" className="h-full" />
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-between">
					<div className="w-1/2 pr-3.5">
						<img src={img[0]} alt="Ex Shiba Astronaut" className="h-full" />
					</div>
					<div className="w-1/2">
						<div className="flex flex-col">
							<img src={img[1]} alt="Floor Price" />
							<div className="flex mt-3 gap-3">
								<div className="w-1/2">
									<img src={img[2]} alt="Up Arrow" />
								</div>
								<div className="w-1/2 relative">
									<img src={img[3]} alt="Down Arrow" />
									{img.length - 4 ? (
										<span
											className="absolute top-0 h-full w-full rounded-md text-2xl font-bold text-white flex justify-center items-center"
											style={{ backgroundColor: "rgba(75, 107, 143, 0.4)" }}
										>
											+{img.length - 4}
										</span>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<span>Collection name</span>
			<h3 className="pb-4">NFT name Ex Shiba Astronaut</h3>
			<div className="text-white p-3 bg-gray-400 rounded-2xl">
				<div className="flex items-center justify-between">
					<span>Price</span>
					<span>Best offer</span>
				</div>
				<div className="flex items-center justify-between">
					<span>1.0 ETH</span>
					<span>1.0 ETH</span>
				</div>
				{(amount || time) && (
					<div className="flex items-center justify-between">
						{amount && <span>${amount}</span>}
						{time && <span>{time}</span>}
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
