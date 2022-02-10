import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import TableComponent from "./Table/Table"

const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;
function LeftMenu() {
    const [continent, setContinent] = useState('AS');
    const { data, loading, error } = useQuery(LIST_CONTINENTS);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }
    return (
        <Container>
            <Row>

                <Col xs={12} md={2}>
                    <select value={continent} onChange={event => setContinent(event.target.value)}>
                        {data.continents.map(con => (
                            <option key={con.code} value={con.code}>
                                {con.name}
                            </option>
                        ))}
                    </select>
                </Col>

                <Col>
                   <TableComponent/>
                </Col>

            </Row>
        </Container>
    )
}

export default LeftMenu
