import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Personajes } from './assets/header/Personajes'
import { Headers } from './assets/header/Header'
import axios from 'axios'

function App() {

  const [personajes, setPersonajes] = useState([])

  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response => {
        console.log(response)
        setPersonajes(response.personajes)
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
      <div className='container'>
        <Personajes personaje={personajes} />
      </div>
    </>
  )
}



export default App