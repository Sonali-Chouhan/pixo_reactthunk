import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "../component/Layout";
import UserListing from '../pages/Users/UsersListing';
import UserForm from "../pages/Users/Users"

const PublicRoutes = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<UserListing />} />
				<Route path="/users" element={<UserListing />} />
				<Route path="/user/form" element={<UserForm />} />
				<Route path="/user/form/:id" element={<UserForm />} />
			</Routes>
		</Layout>

	)
}

export default PublicRoutes;