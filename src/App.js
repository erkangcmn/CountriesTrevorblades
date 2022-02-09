import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//screens
import Navbar from "./screens/Navbar/Navbar"
import TableComponent from './screens/Home/Table/Table';
import LeftMenu from './screens/Home/LeftMenu/LeftMenu';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>

          <Col xs={12} md={2}>
            <LeftMenu />
          </Col>

          <Col>
            <TableComponent />
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default App;
