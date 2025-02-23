import { useState } from "react";
import { addUser } from "../hooks/AsyncDados";

const InsertClients = ({
  isOpen,
  onClose,
  
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [nameClient, setNameClient] = useState("");
  const [roleClient, setRoleClient] = useState("");

  if (!isOpen) return null;

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newClient = {      
      name: nameClient,
      role: roleClient,
    };
    try {
    
      await addUser(newClient);
      setNameClient(""); 
      setRoleClient(""); 
      onClose(); 
    } catch (error) {
      console.error("Erro ao adicionar o cliente:", error);
    }
  };

  return (
    <div
    className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50" 
    onClick={onClose}
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg w-96 relative text-black"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-lg font-bold mb-4">Adicionar Cliente</h2>
      <form onSubmit={handleAddUser}>
        <label className="text-black text-sm font-medium">Nome</label>
        <input
          type="text"
          value={nameClient}
          onChange={(e) => setNameClient(e.target.value)}
          placeholder="Digite seu nome"
          className="border border-black rounded-lg w-full h-9 px-3 outline-none text-black"
        />
  
        <label className="text-black text-sm font-medium mt-4">Cargo</label>
        <input
          type="text"
          value={roleClient}
          onChange={(e) => setRoleClient(e.target.value)}
          placeholder="Digite seu cargo"
          className="border border-black rounded-lg w-full h-9 px-3 outline-none text-black"
        />
  
        <button
          type="submit"
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          Enviar!
        </button>
      </form>
    </div>
  </div>
  );
};

export default InsertClients;
