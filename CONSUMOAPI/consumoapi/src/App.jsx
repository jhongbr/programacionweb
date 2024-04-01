import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Personajes } from './assets/header/Personajes'
import { Headers } from './assets/header/Header'
import axios from 'axios'
import { Boton } from './assets/header/Boton';

function App() {

  const [personajes, setPersonajes] = useState([])
  

  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response => {
        console.log(response)
        setPersonajes(response.data.results)
      }))
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <>
      <Headers title={"The Rick and Morty API"} />

      <Boton/>

      <div className='container'>
        <Personajes items={personajes} />
      </div>

    </>
  )
}

export default App