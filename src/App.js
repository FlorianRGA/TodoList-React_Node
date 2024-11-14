// App.js
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Layout from "./pages/Layout";
import Home from "./pages/home";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="update" element={<Update />} />
				<Route path="create" element={<Create />} />
			</Route>
		</Routes>
	);
}
