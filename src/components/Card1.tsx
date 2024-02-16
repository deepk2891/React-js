import React from "react"

const Card1 = () => {
	return (
		<>
			<section className="pt-10">
				<div className="container mx-auto">
					<div className="flex">
						<div className="card rounded-2xl border-2 p-4 bg-[#282828]">
							<img src="./card1-img.png" alt="" className="rounded-2xl" height={264} width={224} />
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
								<div className="flex items-center justify-between">
									<span>$130,729.12</span>
									<span>4hrs left</span>
								</div>
							</div>
						</div>
						<div className="card rounded-2xl border-2 p-4 bg-[#282828]">
							<div className="flex">
								<div className="w-1/2 pr-3.5">
									<img src="./card2-img1.png" alt="Ex Shiba Astronaut" height={168} width={184} className="h-full" />
								</div>
								<div className="w-1/2">
									<div className="flex flex-col">
										<img src="./card2-img2.png" alt="Floor Price" height={80} width={160} />
										<div className="flex mt-3">
											<div className="w-1/2">
												<img src="./card2-img1.png" alt="Up Arrow" height={76} width={72} />
											</div>
											<div className="w-1/2">
												<img src="./card2-img1.png" alt="Down Arrow" height={76} width={72} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card rounded-2xl border-2 px-4 py-5 bg-[#282828]">
							<div className="relative min-h-48">
								<img src="./card3-img1.png" alt="Description of card image 1" />
								<div className="absolute bottom-0 left-8 z-10 rounded-full h-21 w-21 overflow-hidden">
									<img src="./card3-img2.png" alt="Description of profile image" className="rounded-full" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Card1
