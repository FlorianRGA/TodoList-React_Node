import axios from "axios";

export const updateTodo = async (id, data) => {
	try {
		const response = await axios.put(
			`http://localhost:5000/update/${id}`,
			data
		);
		return response.data;
	} catch (error) {
		console.error("Erreur de demande..");
		throw error;
	}
};
