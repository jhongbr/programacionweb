import React from 'react'
import { PersonajeCard } from './PersonajeCard';


export const Personajes = ({ items = []}) => {
  return (
    <div className='container1'>
      <div className='row'>
          {
            items.map((item, index) => 
            {
              return(
              <div key={index} className='col'>
                <PersonajeCard item={item}/>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}
