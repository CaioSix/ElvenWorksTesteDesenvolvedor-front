import React from 'react'
import { Clients } from '../types/MockClientes'
import { deleteUser } from '../hooks/AsyncDados'



const ClientList = ({ dados }) => {

    const handleDelete = async (clientID: number) => {

        return await deleteUser(clientID)
    }

    return (
        <div className="bg-green-100 mx-6 my-4 flex-1 h-3/4 border-22 border-green-100">
            <h1 className='text-center'>Lista de Clientes</h1>
            <h4 className='text-center'>Gerenciamento dos princiapais clientes:</h4>
            <div className='flex flex-row gap-2.5 flex mb-4 w-[246px]'>

                {dados.map((client: Clients) => (


                    <ul className='border flex flex-col' key={client.id}>
                        <div className="flex justify-between">
                            <li>Cliente: {client.name}</li>
                            <button
                                onClick={() => handleDelete(client.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={` text-red-400  size-6`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <li>Ramo: {client.role}</li>                     

                    </ul>
                ))}
            </div>
        </div>
    )
}

export default ClientList