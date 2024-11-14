import axios from "axios";

export const createTodo = async (json) => {
	try {
		const response = await axios.post("http://localhost:5000/create", json);
		return response.data;
	} catch (error) {
		console.error("Erreur de demande..");
		throw error;
	}
};
