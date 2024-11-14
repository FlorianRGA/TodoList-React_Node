import axios from "axios";

const getAllTodo = async () => {
	try {
		const response = await axios.get("http://localhost:5000/todos");
		return response.data;
	} catch (error) {
		console.error("Erreur de demande..");
		throw error;
	}
};
export default getAllTodo;
