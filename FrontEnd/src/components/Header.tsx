import React from 'react'
import { Link } from "react-router";
import MenuHeader from './MenuHeader';
import Logo from '../../public/logo.png'
import Button from './Button';
import { menuData } from '../types/MenuHeaders';

const Header = () => {
  return (
    <div className="w-full bg-[#fff] font-roboto flex items-center justify-between p-5 max-h-[80px] border-b border-gray-300">
      <div className="flex items-center space-x-4"  >
        <img src={Logo} />

        <MenuHeader name={'Produtos'} itens={menuData.firstMenu} />
        <MenuHeader name={'Soluções'} itens={menuData.secondMenu}/>
        <MenuHeader name={'Aprenda'} itens={menuData.thirdMenu}/>
        <MenuHeader name={'Documentação'} itens={menuData.fortyMenu}/>
      </div>

      <div className='flex flex-end gap-2 justify-center'>
        <ul className='flex flex-end gap-2 justify-center'>   
          <Button
            text="Teste Gratuito"
            bgColor="bg-green-500" 
            textColor="text-white" 
            borderColor="border-green-500" 
          />
          <Button
            text="Acessar Plataforma"
            bgColor="bg-white"
            textColor="text-green-500"
            borderColor="border-green-500"
          />
        </ul>


      </div>
    </div>
  )
}

export default Header