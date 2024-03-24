import React from 'react'
import Card from 'react-bootstrap/Card';

export const PersonajeCard = ({ item }) => {
  return (
    <Card style={{ width: '18rem', marginBottom: "15px" }}>
      <Card.Img src={item.image} alt='personaje' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

