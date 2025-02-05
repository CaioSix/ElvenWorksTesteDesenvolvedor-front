import { Clients } from '../types/MockClientes';
import { deleteUser } from '../hooks/AsyncDados';


const ClientList = ({ dados }: { dados: Clients[] }) => {
    
    const handleDelete = async (clientID: number) => {
        try {
            await deleteUser(clientID.toString());
            alert('Cliente deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };

    return (
        <div className="bg-green-100 mx-6 my-4 flex-1 h-3/4 p-4">
            <h1 className="text-center text-lg font-bold">Lista de Clientes</h1>
            <h4 className="text-center text-gray-700">Gerenciamento dos principais clientes:</h4>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
                {dados.map((client) => (
                    <div key={client.id} className="bg-white flex flex-col p-3 w-[278px] rounded-3xl shadow-md">
                        
                        <div className="p-4 bg-[#F4F5F7] rounded-b-3xl ">
                            <button
                                onClick={() => client.id !== undefined && handleDelete(client.id)}
                                className="absolute top-2 right-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="text-red-400 size-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h1 className="font-bold text-base mt-3">{client.name}</h1>
                            <div className="my-2 text-sm text-gray-600">Ramo: {client.role}</div>
                         
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientList;
