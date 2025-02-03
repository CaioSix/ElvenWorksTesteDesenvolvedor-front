import React from 'react'
import axios from "axios";


const Testando = async () => {
    try {
        const response = await axios.get("http://localhost:3000/data");
        console.log(response.data); 
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
  return (
    <div>
        dados carregados!
    </div>
  )
}

export default Testando