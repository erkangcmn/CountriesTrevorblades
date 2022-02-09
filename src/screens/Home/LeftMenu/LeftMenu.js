import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;
function LeftMenu() {
    const [continent, setCountry] = useState('AS');
    const { data, loading, error } = useQuery(LIST_CONTINENTS);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }
    return (
        <>
            <select value={continent} onChange={event => setCountry(event.target.value)}>
                {data.continents.map(con => (
                    <option key={con.code} value={con.code}>
                        {con.name}
                    </option>
                ))}
            </select>
        </>
    )
}

export default LeftMenu
