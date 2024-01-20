import React, { useState, useEffect } from "react"

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

		return `${hours} ${minutes} ${seconds}`
	}

	return (
		<>
			<h1 className="font-3xl">{formatTime(time)}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
			<button onClick={handleReset}>Reset</button>
		</>
	)
}

export default App2
