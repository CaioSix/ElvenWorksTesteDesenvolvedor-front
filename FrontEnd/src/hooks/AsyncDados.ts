import axios from "axios";
import { Clients } from "../types/MockClientes";

const API_URL = "http://localhost:3000/clientes"; 

export const getData = async (): Promise<Clients[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log(`Usuário com ID ${id} deletado.`);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
  }
};

export const addUser = async (client: Clients): Promise<Clients> => {
  try {
    const response = await axios.post(API_URL, client); 
    console.log(`Usuário ${client.name} adicionado!`);
    return response.data; 
  } catch (error) {
    console.error("Erro ao adicionar o usuário:", error);
    throw error; 
  }
}

export default { getData, deleteUser, addUser };
