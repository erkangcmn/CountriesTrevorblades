import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

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
  const { data, loading, error } = useQuery(LIST_CONTINENTS, { client });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <Container style={{margin:20}}>
      <select value={continent} onChange={event => setCountry(event.target.value)}>
        {data.continents.map(con => (
          <option key={con.code} value={con.code}>
            {con.name}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default App;
