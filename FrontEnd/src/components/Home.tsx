import { useEffect, useState } from 'react'
import ClientList from './ClientList'
import { Clients } from '../types/MockClientes'
import { getData } from '../hooks/AsyncDados'
import InsertClients from './InsertClients'


const Home = () => {
  const [dados, setDados] = useState<Clients[]>([]);
  const [atual, setAtual] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setDados(data);
    };
    fetchData();
  }, [atual, isModalOpen]);


  return (
    <>
      <div className="bg-gradient-to-r  from-green-400 to-blue-500 p-10 text-white text-align-center rounded-xl mx-auto max-w-screen-lg mt-[20px]">
        <div className="pl-4 mx-14">

          <h1 className='text-center'>A melhor solução para monitoramento,
            <br />observabilidade e gestão de incidentes</h1>
          <p className='text-center'>Eficiência e praticidade para sua operação de TI</p>

        </div>

        {isModalOpen && <InsertClients isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}  />}
        <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r  from-green-400 to-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 text-white"
        >
          Clique para adicionar seu cliente!
        </button>
      </div>

      </div>
     
      <ClientList dados={dados} att={setAtual}/>


    </>

  )
}

export default Home