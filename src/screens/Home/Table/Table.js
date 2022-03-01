import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Table, Button } from 'react-bootstrap';


const LIST_COUNTRY = gql` 
    query LISTCOUNTRY($code: ID!) {
        continent(code: $code)  {                      
            name
            countries{
                name
                capital
                emoji 
            }
        }   
    }
`;

function TableComponent(props) {

    const { loading, error, data } = useQuery(LIST_COUNTRY, {
        variables: { code: props.name },
    });

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }
    const listData = Object.entries(data.continent.countries)

    return (
        <>
            <h1>Seçilen Ülke Kodu:{props.name}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Emoji</th>
                    </tr>
                </thead>
                <tbody>




                    {
                        listData.sort((a, b) => a.timeM > b.timeM ? -1 : 1).map(
                            (item, index) => item.map(a => {
                                return (
                                    <>
                                        {(a.name) ?
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{(a.name)}</td>
                                                <td>{(a.capital)}</td>
                                                <td>{(a.emoji)}</td>
                                                <td><Button variant="outline-success">Detay</Button></td>
                                            </tr>
                                            : null
                                        }
                                    </>
                                )
                            })
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent



