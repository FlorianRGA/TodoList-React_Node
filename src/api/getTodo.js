import axios from "axios";

export const getTodo = async () => {
	try {
		const response = await axios.get("http://localhost:3000/");
		return response.data;
	} catch (error) {
		console.error("Erreur de demande..");
		throw error;
	}
};
