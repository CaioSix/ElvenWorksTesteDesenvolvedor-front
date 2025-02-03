import React from 'react'
import { PageMenu } from '../types/MenuHeaders';
import { menuData } from '../types/MenuHeaders';

const MenuHeader = ({name, itens}) => {
    return (
        <div>
        <div className="relative">
          <ul className="flex space-x-4">
            <li className="relative group">
            <div className="hover-trigger">

              <button className="hover:text-blue-500">{name}</button>
              <ul
                className="absolute left-0 mt-2 hidden group-hover:grid bg-white shadow-lg rounded-lg p-4 gap-4"
                style={{
                  gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))', 
                }}
              >                
                {itens.map((item, index) => (
                  <li key={index} className="px-2 py-2">
                    <a href={item.url} className="block hover:bg-gray-100">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default MenuHeader