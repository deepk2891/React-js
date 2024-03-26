import React, { useState } from "react"
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
	const [usersData, setUsersData] = useState(JSON.parse(localStorage.getItem("usersData")) || [])
	const navigate = useNavigate()

	const initialValues = {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	}

	const signUpSchema = Yup.object({
		username: Yup.string().min(3).max(10).required("Please Enter Your Name"),
		email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
		password: Yup.string().min(6).required("Please Enter Your Password"),
		confirmPassword: Yup.string()
			.required("Please Enter Your Confirm Password")
			.oneOf([Yup.ref("password"), null], "Password must Match"),
	})

	const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
		initialValues: initialValues,
		validationSchema: signUpSchema,
		onSubmit: (values, action) => {
			setUsersData([...usersData, values])
			localStorage.setItem("usersData", JSON.stringify([...usersData, values]))
			action.resetForm()
			navigate("/login")
		},
	})

	return (
		<div className="flex justify-center items-center">
			<div className="max-w-md w-full">
				<div></div>
				<div className="mt-8 bg-white py-8 px-4 shadow-md">
					<h4 className="text-center font-bold text-xl mb-4">Sign up</h4>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
								Username
							</label>
							<input
								type="text"
								name="username"
								className={`w-full px-3 py-2 border ${
									errors.username && touched.username ? "border-red-500" : "border-gray-300"
								} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
								id="username"
								placeholder="Username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.username && touched.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
								Email address
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
							<label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-1">
								Confirm Password
							</label>
							<input
								type="password"
								name="confirmPassword"
								className={`w-full px-3 py-2 border ${
									errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-gray-300"
								} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
								id="confirmPassword"
								placeholder="Confirm Password"
								value={values.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.confirmPassword && touched.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
						</div>
						<div className="mb-4">
							<button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300" type="submit">
								Sign Up
							</button>
						</div>
					</form>
					<div className="text-center">
						<p className="text-gray-600 font-semibold">
							Already have an account?
							<Link to="/login" className="text-blue-500 hover:underline">
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signup
