import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Formulario = ({getPersonas}) => {
  const [names, setNames] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image, setImage] = useState("");
  

  const setFormulario = async () => {
    const data = {

      names: names,
      telephone: telephone,
      image: image,
    }
    const response = await axios.post("https://zt8wcr6iib.execute-api.us-east-2.amazonaws.com/dev/project", data);
    console.log(response)
    if (response.status == 200){
      getPersonas()
    }
  }

  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>names</Form.Label>
          <Form.Control type="email" placeholder="nombre" onChange={(e) => setNames(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="email" placeholder="telefono" onChange={(e) => setTelephone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>image</Form.Label>
          <Form.Control type="email" placeholder="imagen" onChange={(e) => setImage(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={setFormulario}>enviar</Button>{' '}
      </Form>
    </div>
  )
}