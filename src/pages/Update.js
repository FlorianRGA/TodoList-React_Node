import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { updateTodo } from "../api/updateTodo";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
	const location = useLocation();
	const data = location.state ? location.state.data : null;
	const id = data._id;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			setTitle(data.title);
			setDescription(data.description);
		} else {
			navigate("/");
		}
	}, [data, navigate]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedData = {
			title: title,
			description: description,
		};
		try {
			await updateTodo(id, updatedData);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};
	if (!data) {
		return <div>Chargement des données...</div>;
	}
	return (
		<main>
			<Typography
				variant="h3"
				sx={{ fontSize: "1.5rem", textAlign: "center", mt: "2rem" }}
			>
				Edit a todo
			</Typography>
			<Box
				onSubmit={handleSubmit}
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
					height: "40vh",
				}}
			>
				<TextField
					required
					sx={{ mt: "1rem" }}
					id="Title"
					label="Title"
					variant="standard"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextField
					id="description"
					label="description"
					variant="standard"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button variant="outlined" type="submit">
					Modifier
				</Button>
			</Box>
		</main>
	);
};
export default Edit;
