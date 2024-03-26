import React, { useState } from "react"
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
	const [users, setUsers] = useState(JSON.parse(localStorage.getItem("usersData")) || [])
	const [validate, setValidation] = useState("")
	const navigate = useNavigate()

	const initialValues = {
		email: "",
		password: "",
	}

	const logInSchema = Yup.object({
		email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
		password: Yup.string().min(6).required("Please Enter Your Password"),
	})

	const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
		initialValues: initialValues,
		validationSchema: logInSchema,
		onSubmit: (values, action) => {
			let isUserExist = users.find((x) => x.email === values.email && x.password === values.password)
			if (!isUserExist) {
				setValidation("Incorrect email or password")
			} else {
				const isLogIn = true
				isUserExist = { ...isUserExist, isLogIn }
				localStorage.setItem("logedUser", JSON.stringify(isUserExist))
				navigate("/Home10")
			}
		},
	})

	return (
		<>
			<h1 className="text-black font-semibold text-center mt-5 text-4xl font-mono">LOGIN LOGOUT SYSTEM WITH protected Route</h1>
			<div className="flex justify-center items-center">
				<div className="max-w-md w-full">
					<div className="mt-8 bg-white py-8 px-4 shadow-md">
						<h4 className="text-center font-bold text-xl mb-4">Log in / Sign up</h4>
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
									Enter Email address
								</label>
								<input
									type="email"
									name="email"
									className={`w-full px-3 py-2 border ${
										errors.email && touched.email ? "border-red-500" : "border-gray-300"
									} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
									id="email"
									placeholder="name@example.com"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.email && touched.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
							</div>
							<div className="mb-4">
								<label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
									Password
								</label>
								<input
									type="password"
									name="password"
									className={`w-full px-3 py-2 border ${
										errors.password && touched.password ? "border-red-500" : "border-gray-300"
									} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
									id="password"
									placeholder="Password"
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.password && touched.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
							</div>
							<div className="mb-4">
								<p className="text-red-500 text-sm">{validate}</p>
								<button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300" type="submit">
									Continue
								</button>
							</div>
						</form>
						<div className="text-center">
							<p className="text-gray-600 font-semibold">
								Don't have an account?{" "}
								<Link to="/signup" className="text-blue-500 hover:underline">
									Sign Up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
