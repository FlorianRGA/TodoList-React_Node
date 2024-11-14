// App.js
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Layout from "./pages/Layout";
import Home from "./pages/home";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="edit" element={<Edit />} />
				<Route path="create" element={<Create />} />
			</Route>
		</Routes>
	);
}
