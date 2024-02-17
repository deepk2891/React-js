import React from "react"

const Card1 = () => {
	return (
		<>
			<section className="pt-10">
				<div className="container mx-auto">
					<div className="flex flex-wrap">
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
								<div className="absolute bottom-9 left-12 z-10 rounded-full h-21 w-21 overflow-hidden">
									<img src="./card3-img2.png" alt="Description of profile image" className="rounded-full" />
								</div>
							</div>
						</div>
						<div className="card w-[368px] rounded-2xl border-2 px-4 py-5 bg-[#282828] text-white">
							<div className="flex justify-between items-center">
								<div className="flex items-center">
									<span className="pr-3">1</span>
									<div className="relative">
										<img src="./card4-img1.png" alt="Profile picture" className="h-16 w-16 rounded-full" />
										<img src="./card4-imgVerified.png" alt="Verified badge" className="absolute right-0 bottom-0 h-5 w-5" />
									</div>
									<div className="flex flex-col ml-2.5">
										<span className="font-semibold text-lg">Phuong Pham</span>
										<div className="flex items-center text-gray-400 pt-1">
											<img src="./card4-img3.png" alt="" className="h-4 w-4 mr-1" /> <span className="ps-1">2,798</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-end">
									<div>
										<img className="h-6 w-6" src="./card4-img4.png" alt="" />
										{/* <img className="h-6 w-6" src="./card4-img4.png" alt="" /> */}
										{/* <img className="h-6 w-6" src="./card4-img4.png" alt="" /> */}
									</div>
									<span className="text-[12px]">Followed by mikain</span>
									<span className="text-[12px]">and 2,129 users</span>
								</div>
							</div>
						</div>
						<div className="card w-[300px] rounded-2xl border-2 overflow-hidden bg-[#282828] text-white">
							<div className="flex">
								<div className="w-[40%]">
									<img src="./card1-img.png" alt="dd" height={122} />
								</div>
								<div className="w-1/2">
									<div className="flex items-center px-4 h-full">
										<div>
											<p>This is the collection name - NFT Name</p>
											<span>by</span>
											<span>@Someone</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card w-[564px] rounded-2xl border-2 overflow-hidden px-4 py-5 bg-[#282828] text-white">
							<div className="flex">
								<img src="./card1-img.png" alt="" className="rounded-2xl h-[328px] w-[352px] mr-8" />
								<div className="flex flex-col relative ">
									<img src="./card1-img.png" alt="" className="rounded-2xl h-[160px] w-[172px] mt-10 mb-10" />
									<img src="./card1-img.png" alt="" className="rounded-2xl h-[120px] w-[128px]" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto mt-10">
					<div className="flex flex-wrap gap-6">
						<div className="card w-[256px] rounded-2xl border-2 p-4 bg-[#282828]">
							<img src="./card1-img.png" alt="" className="rounded-2xl w-full" height={264} />
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
						<div className="card w-[256px] rounded-2xl border-2 p-4 bg-[#282828]">
							<img src="./card1-img.png" alt="" className="rounded-2xl w-full" height={264} />
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
					</div>
				</div>
				<div className="container mx-auto mt-10">
					<div className="flex flex-wrap lg:gap-y-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora qui, nam eius ullam assumenda tenetur dolore? Autem ad, possimus quaerat dignissimos blanditiis est
						consectetur minima voluptatum debitis, nesciunt voluptas.
						<div className="card w-full md:w-1/2 lg:w-1/3">
							<div className="rounded-2xl border-2 p-4 mr-3 bg-[#282828]">
								<div className="flex justify-between">
									<div className="w-1/2 pr-3.5">
										<img src="./card2-img1.png" alt="Ex Shiba Astronaut" className="h-full" />
									</div>
									<div className="w-1/2">
										<div className="flex flex-col">
											<img src="./card2-img2.png" alt="Floor Price" />
											<div className="flex mt-3 gap-3">
												<div className="w-1/2">
													<img src="./card2-img1.png" alt="Up Arrow" />
												</div>
												<div className="w-1/2 relative">
													<img src="./card2-img1.png" alt="Down Arrow" />
													<span
														className="absolute top-0 h-full w-full rounded-md text-2xl font-bold text-white flex justify-center items-center"
														style={{ backgroundColor: "rgba(75, 107, 143, 0.4)" }}
													>
														+12
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card w-full md:w-1/2 lg:w-1/3">
							<div className="rounded-2xl border-2 p-4 mr-3 bg-[#282828]">
								<div className="flex justify-between">
									<div className="w-1/2 pr-3.5">
										<img src="./card2-img1.png" alt="Ex Shiba Astronaut" className="h-full" />
									</div>
									<div className="w-1/2">
										<div className="flex flex-col">
											<img src="./card2-img2.png" alt="Floor Price" />
											<div className="flex mt-3 gap-3">
												<div className="w-1/2">
													<img src="./card2-img1.png" alt="Up Arrow" />
												</div>
												<div className="w-1/2">
													<img src="./card2-img1.png" alt="Down Arrow" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card w-full md:w-1/2 lg:w-1/3">
							<div className="rounded-2xl border-2 p-4 mr-3 bg-[#282828]">
								<div className="flex justify-between">
									<div className="w-1/2 pr-3.5">
										<img src="./card2-img1.png" alt="Ex Shiba Astronaut" className="h-full" />
									</div>
									<div className="w-1/2">
										<div className="flex flex-col">
											<img src="./card2-img2.png" alt="Floor Price" />
											<div className="flex mt-3 gap-3">
												<div className="w-1/2">
													<img src="./card2-img1.png" alt="Up Arrow" />
												</div>
												<div className="w-1/2">
													<img src="./card2-img1.png" alt="Down Arrow" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto my-10">
					<div className="flex flex-wrap justify-center xl:justify-start gap-4">
						<div className="w-[350px] md:w-[48%] lg:w-[23%] xl:w-[24%]">
							<div className="rounded-2xl border-2 p-4 h-80 w-full bg-[#282828] text-white relative overflow-hidden">
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-10 left-0 bottom-0 rotate-[25deg] -translate-x-16 border-white border-[6px] rounded-2xl" />
								<img
									src="./card2-img1.png"
									alt=""
									className="h-[174px] w-[174px] absolute z-20 left-40 top-24 rotate-[25deg] -translate-x-16 scale-[1.4] border-white border-[5px] rounded-2xl"
								/>
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-30 right-0 -top-2 -rotate-[35deg] translate-x-16  border-white border-[6px] rounded-2xl" />
								<div className="absolute z-40 bottom-4 left-4 right-4 py-4 px-6 backdrop-blur-sm text-white rounded-2xl flex justify-between">
									<span>ART</span>
									<span>28 items</span>
								</div>
							</div>
						</div>
						<div className="w-[350px] md:w-[48%] lg:w-[23%] xl:w-[24%]">
							<div className="rounded-2xl border-2 p-4 h-80 w-full bg-[#282828] text-white relative overflow-hidden">
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-10 left-0 bottom-0 rotate-[25deg] -translate-x-16 border-white border-[6px] rounded-2xl" />
								<img
									src="./card2-img1.png"
									alt=""
									className="h-[174px] w-[174px] absolute z-20 left-40 top-24 rotate-[25deg] -translate-x-16 scale-[1.4] border-white border-[5px] rounded-2xl"
								/>
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-30 right-0 -top-2 -rotate-[35deg] translate-x-16  border-white border-[6px] rounded-2xl" />
								<div className="absolute z-40 bottom-4 left-4 right-4 py-4 px-6 backdrop-blur-sm text-white rounded-2xl flex justify-between">
									<span>ART</span>
									<span>28 items</span>
								</div>
							</div>
						</div>
						<div className="w-[350px] md:w-[48%] lg:w-[23%] xl:w-[24%]">
							<div className="rounded-2xl border-2 p-4 h-80 w-full bg-[#282828] text-white relative overflow-hidden">
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-10 left-0 bottom-0 rotate-[25deg] -translate-x-16 border-white border-[6px] rounded-2xl" />
								<img
									src="./card2-img1.png"
									alt=""
									className="h-[174px] w-[174px] absolute z-20 left-40 top-24 rotate-[25deg] -translate-x-16 scale-[1.4] border-white border-[5px] rounded-2xl"
								/>
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-30 right-0 -top-2 -rotate-[35deg] translate-x-16  border-white border-[6px] rounded-2xl" />
								<div className="absolute z-40 bottom-4 left-4 right-4 py-4 px-6 backdrop-blur-sm text-white rounded-2xl flex justify-between">
									<span>ART</span>
									<span>28 items</span>
								</div>
							</div>
						</div>
						<div className="w-[350px] md:w-[48%] lg:w-[23%] xl:w-[24%]">
							<div className="rounded-2xl border-2 p-4 h-80 w-full bg-[#282828] text-white relative overflow-hidden">
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-10 left-0 bottom-0 rotate-[25deg] -translate-x-16 border-white border-[6px] rounded-2xl" />
								<img
									src="./card2-img1.png"
									alt=""
									className="h-[174px] w-[174px] absolute z-20 left-40 top-24 rotate-[25deg] -translate-x-16 scale-[1.4] border-white border-[5px] rounded-2xl"
								/>
								<img src="./card2-img1.png" alt="" className="h-[164px] w-[164px] absolute z-30 right-0 -top-2 -rotate-[35deg] translate-x-16  border-white border-[6px] rounded-2xl" />
								<div className="absolute z-40 bottom-4 left-4 right-4 py-4 px-6 backdrop-blur-sm text-white rounded-2xl flex justify-between">
									<span>ART</span>
									<span>28 items</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<div className="flex flex-wrap">
						<div className="card w-[368px] rounded-2xl border-2 px-4 py-5 bg-[#282828] text-white">
							<div className="flex justify-start items-center">
								<span className="pr-3">1</span>
								<div className="relative">
									<img src="./card4-img1.png" alt="Profile picture" className="h-16 w-16 rounded-full" />
									<img src="./card4-imgVerified.png" alt="Verified badge" className="absolute right-0 bottom-0 h-5 w-5" />
								</div>
								<div className="flex flex-col flex-grow">
									<div className="flex justify-between items-center pl-3">
										<span className="font-semibold text-lg line-clamp-1">Phuong Pham</span>
										<div>
											<img className="h-6 w-6" src="./card4-img4.png" alt="" />
										</div>
									</div>
									<div className="flex justify-between items-center pl-3">
										<div className="flex items-center text-gray-400 pt-1">
											<img src="./card4-img3.png" alt="" className="h-4 w-4 mr-1" /> <span className="ps-1">2,798</span>
										</div>
										<div className="flex flex-col">
											<span className="text-[12px]">Followed by mikain</span>
											<span className="text-[12px]">and 2,129 users</span>
										</div>
									</div>
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
