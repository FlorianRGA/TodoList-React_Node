import "../App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import getAllTodo from "../api/getAllTodos";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	List,
	ListItem,
	Divider,
	Grid2,
	Box,
	ListItemText,
	ListItemButton,
	ListSubheader,
	Typography,
	AppBar,
	ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deleteTodo } from "../api/deleteTodo";

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTodo = async () => {
			try {
				const data = await getAllTodo();
				setTodos(data);
			} catch (error) {
				setError(error);
			}
		};
		fetchTodo();
	}, []);
	if (error) {
		return <div>Error ..</div>;
	}
	const deleteTodoById = async (id) => {
		try {
			await deleteTodo(id);
			setTodos(todos.filter((todo) => todo._id !== id));
		} catch (error) {
			return console.log(error);
		}
	};
	return (
		<div className="App">
			<main>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: "1rem",
					}}
				>
					<Link to={"/create"}>
						<Button variant="outlined">Create a new todo</Button>
					</Link>
				</Box>
				<List>
					<Grid2 container rowSpacing={1}>
						{todos.map((todo) => (
							<Grid2 size={6} key={`grid_${todo._id}`}>
								<ListItem>
									<ListItemText sx={{ width: "20%", fontSize: "1rem" }}>
										{todo.title}
									</ListItemText>
									<ListItemText sx={{ width: "50%", fontSize: "0.75rem" }}>
										{todo.description}
									</ListItemText>
									<ListItemButton sx={{ width: "10%" }}>
										<EditIcon sx={{ color: "blue" }} />
									</ListItemButton>
									<ListItemButton
										variant="contained"
										type="submit"
										sx={{ width: "10%" }}
										onClick={() => deleteTodoById(todo._id)}
									>
										<DeleteIcon sx={{ color: "red" }} />
									</ListItemButton>
								</ListItem>
							</Grid2>
						))}
					</Grid2>
				</List>
			</main>
		</div>
	);
};

export default Home;
