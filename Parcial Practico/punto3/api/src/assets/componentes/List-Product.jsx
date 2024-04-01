import React from 'react'
import Table from 'react-bootstrap/Table';

export const ListProducts = ({ listPersonas }) => {
  return (
    <Table striped bordered hover>
      <tbody>
        {
          listPersonas.map((element) => {
            return (
              <tr>
                <td>{element.identify}</td>
                <td>{element.names}</td>
                <td>{element.telephone}</td>
                <td>{element.image}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}