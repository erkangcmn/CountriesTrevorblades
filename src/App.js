import React, {  useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Container, Row, Col, Nav, Navbar, Table } from 'react-bootstrap';

// write a GraphQL query that asks for names and codes for all countries
const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

// create a component that renders a select input for coutries
function App() {
  const [continent, setCountry] = useState('');
  const { data, loading, error } = useQuery(LIST_CONTINENTS);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }


  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
 
          <Col xs={12} md={2}>
            <select value={continent} onChange={event => setCountry(event.target.value)}>
              {data.continents.map(con => (
                <option key={con.code} value={con.code}>
                  {con.name}
                </option>
              ))}
            </select>
          </Col>


          <Col>
          <h1>Seçilen Kıta: {continent}</h1>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
