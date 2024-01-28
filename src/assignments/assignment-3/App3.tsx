import React, { useState } from "react"

const App3 = () => {
	const [userName, setUserName] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [userPassword, setUserPassword] = useState("")
	const [gender, setGender] = useState("")
	const [hobbies, setHobbies] = useState([])
	const [course, setCourse] = useState("")
	const [inputIsEmptyMessage, setInputIsEmptyMessage] = useState("")

	const handleInputChange = (event) => {
		const { id, value } = event.target

		switch (id) {
			case "userName":
				setUserName(value)
				break
			case "userEmail":
				setUserEmail(value)
				break
			case "userPassword":
				setUserPassword(value)
				break
			default:
				break
		}
	}

	const handleGenderChange = (event) => {
		setGender(event.target.value)
	}

	const handleHobbiesChange = (event) => {
		const { checked, value } = event.target

		if (checked) {
			setHobbies((prevHobbies) => [...prevHobbies, value])
		} else {
			setHobbies((prevHobbies) => prevHobbies.filter((hobby) => hobby !== value))
		}
	}

	const handleCourseChange = (event) => {
		setCourse(event.target.value)
	}

	const addUser = () => {
		const newRowHTML = `
      <tr>
        <td class="border border-gray-500 px-2 py-2">${userName}</td>
        <td class="border border-gray-500 px-2 py-2">${userEmail}</td>
        <td class="border border-gray-500 px-2 py-2">${userPassword}</td>
        <td class="border border-gray-500 px-2 py-2">${gender}</td>
        <td class="border border-gray-500 px-2 py-2">${hobbies.join(", ")}</td>
        <td class="border border-gray-500 px-2 py-2">${course}</td>
        <td class="border border-gray-500 px-2 py-2">
          <button class="border border-blue-500 text-lg py-2 px-6 bg-blue-600 text-white hover:bg-white hover:text-blue-400" onclick="editUser(this)">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="border border-red-500 text-lg py-2 px-6 bg-red-600 text-white hover:bg-white hover:text-red-400" onclick="deleteUser(this)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `

		if (!userName || !userEmail || !userPassword || !gender || !hobbies.length || !course) {
			setInputIsEmptyMessage("Please enter all user information")
		} else {
			setInputIsEmptyMessage("")
			// Insert the new row to the table or perform any other necessary actions
		}
	}

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-medium text-black py-8 bg-blue-200">
				CRUD Application in <span className="text-indigo-600">ReactJS</span>
			</h1>
			<div className="flex flex-col xl:flex-row py-5 text-lg">{/* ... rest of your code ... */}</div>
		</div>
	)
}

export default App3
