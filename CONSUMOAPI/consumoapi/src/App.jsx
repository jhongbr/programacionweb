import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Personajes } from './assets/header/Personajes'
import { Headers } from './assets/header/Header'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function App() {

  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState({})

  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response => {
        console.log(response)
        setPersonajes(response.data.results)
        setInfo(response.data.info)
      }))
      .catch((error) => {
        console.log(error)
      })
  }

  const handleNextPage = () => {
    getCharacters(info.next)
    window.scrollTo(0, 0)
  }

  const handlePreviousPage = () => {
    getCharacters(info.prev)
    windows.scrollTo(0, 0)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <>
      <Headers title={"The Rick and Morty API"} />

      <div className="container py-5">
        <nav>
            {info.prev ? (
              <li>
                <Button prev={info} onClick={handlePreviousPage + 1}>
                  Previous
                </Button>
              </li>
            ) : null}
            {info.next ? (
              <li >
                <Button next={info} onClick={handleNextPage - 1}>
                  Next
                </Button>
              </li>
            ) : null}
        </nav>
      </div>


      <div className='container'>
        <Personajes items={personajes} />
      </div>

    </>
  )
}



export default App