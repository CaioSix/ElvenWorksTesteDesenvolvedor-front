import axios from "axios";
import { Clients } from '../types/MockClientes';


const getData = async (): Promise<Clients[]> => {
  try {
    const response = await axios.get("http://localhost:3000/clientes");
    const data: Clients[] = response.data;
    console.log(data); // Já vem convertido para JSON
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
};

export default getData;

getData();
