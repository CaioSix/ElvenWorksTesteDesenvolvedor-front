import {useEffect , useState} from 'react'
import ClientList from './ClientList'
import { Clients } from '../types/MockClientes'
import GetDados from '../hooks/GetDados'
import Footer from './Footer'

const Home = () => {
  const [dados, setDados] = useState<Clients[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetDados(); 
      setDados(data);
    };
    fetchData();
  }, [dados]);

  console.log(dados);
  return (
    <>
      <div className="bg-gradient-to-r  from-green-400 to-blue-500 p-10 text-white text-align-center rounded-xl mx-auto max-w-screen-lg">
        <div className="pl-4 mx-14">

          <h1 className='text-center'>A melhor solução para monitoramento,
            <br />observabilidade e gestão de incidentes</h1>
          <p className='text-center'>Eficiência e praticidade para sua operação de TI</p>
        </div>

      </div>
      <ClientList dados={dados}/>
      
      <Footer />

    </>

  )
}

export default Home