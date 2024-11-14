import axios from "axios";

export const deleteTodo = async (id) => {
	try {
		const response = await axios.delete(`http://localhost:5000/delete/${id}`);
		return response.data;
	} catch (error) {
		console.error("Erreur de demande..");
		throw error;
	}
};
