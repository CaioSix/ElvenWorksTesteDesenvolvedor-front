import React from 'react'
import { Clients } from '../types/MockClientes'

// import { listClients } from '../types/MockClientes'

const ClientList = ({dados}) => {
    return (
        <div className="bg-green-100 mx-6 my-4 flex-1 h-3/4">
            <h1 className='text-center'>Lista de Clientes</h1>
            <h4 className='text-center'>Gerenciamento dos princiapais clientes:</h4>
            <div className='flex flex-row gap-2.5 flex'>
            {dados.map( (client: Clients) =>(
                <ul className='border flex flex-col' key={client.name}>
                    <li>Cliente: {client.name}</li>
                    <li>Ramo: {client.role}</li>
                </ul>
            ))}

            </div>
            
        </div>
    )
}

export default ClientList