import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './assets/componentes/Header';
import axios from 'axios'
import { ListProducts } from './assets/componentes/List-Product';
import { Formulario } from './assets/componentes/Formulario';


function App() {

  const [personas, setPersonas] = useState([])
  const [flag, setFlag] = useState(false)

  const getPersonas = async () =>{
    const response = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project")
    console.log(response)
    setPersonas(response.data)
  }

  useEffect(()=>{
    getPersonas()
  }, [])

  return (
    <>
      <Header flag={flag} setFlag={setFlag}/>
      {flag ? <Formulario /> : <ListProducts listPersonas={personas } />}
    </>
  )
}

export default App