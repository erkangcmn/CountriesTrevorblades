import React from 'react'
import { Table } from 'react-bootstrap';


function TableComponent() {
    return (
        <>
            <h2>Seçilen Kıta:</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ülke Adı</th>
                        <th>Başkent</th>
                        <th>Bayrağı</th>
                        <th>Detay</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent
