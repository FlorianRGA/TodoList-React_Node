import { TextField, Input, Box, Typography, Card, Button } from "@mui/material";
import "../App.css";
import { useState } from "react";
import { createTodo } from "../api/createTodo";

export const Create = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			title: title,
			description: description,
		};
		try {
			await createTodo(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<main>
			<Typography
				variant="h3"
				sx={{ fontSize: "1.5rem", textAlign: "center", mt: "2rem" }}
			>
				Create a todo
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
					Envoyer
				</Button>
			</Box>
		</main>
	);
};
export default Create;
