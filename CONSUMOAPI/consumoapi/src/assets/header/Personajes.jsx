import React from 'react'
import Card from 'react-bootstrap/Card';

export const Personajes = ({ personajes = [] }) => {
  return (
    personajes.map((item) => {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img src={item.image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })
  )
}