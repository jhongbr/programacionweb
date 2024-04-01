import React from 'react'
import Card from 'react-bootstrap/Card';

export const PersonajeCard = ({ item }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: "15px" }}>
      <Card.Img src={item.image} alt='personaje' />
      <Card.Body>
        <Card.Title>{"Nombre: " + item.name}</Card.Title>
        <Card.Text>{"Status: " + item.status}</Card.Text>
        <Card.Text>{"Location: " + item.location.name}</Card.Text>
        <Card.Text>{"Origen: " + item.origin.name}</Card.Text>
      </Card.Body>
    </Card>
  )
}

