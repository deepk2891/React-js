import React, { useState, useEffect } from "react"
import { FcAlarmClock } from "react-icons/fc"

const App2 = () => {
	const [time, setTime] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		let interval

		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1)
			}, 1000)
		} else {
			clearInterval(interval)
		}

		return () => {
			clearInterval(interval)
		}
	}, [isRunning])

	const handleStart = () => {
		setIsRunning(true)
	}
	const handleStop = () => {
		setIsRunning(false)
	}
	const handleReset = () => {
		setIsRunning(false)
		setTime(0)
	}

	const formatTime = (timeInSeconds: number) => {
		const hours = Math.floor(timeInSeconds / 3600)
		const minutes = Math.floor((timeInSeconds % 3600) / 60)
		const seconds = timeInSeconds % 60

		return `${hours} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`
	}

	return (
		<div className="container mx-auto">
			<div>
				<h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer pt-7 ps-10">Assignment-2</h1>
			</div>
			<div className="text-center mt-8">
				<FcAlarmClock className="inline text-5xl my-2" />
				<h1 className="text-3xl font-bold mb-4">{formatTime(time)}</h1>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleStart}>
					Start
				</button>
				<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleStop}>
					Stop
				</button>
				<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App2
