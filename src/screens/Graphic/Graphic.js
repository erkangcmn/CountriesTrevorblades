import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { Container } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';


const LIST_TOTAL_DATA = gql`
{
    continents { 
        name
        countries{
          name
        }
      }
  }
`;

function Graphic() {
    const { data, loading, error } = useQuery(LIST_TOTAL_DATA);
    const countriesLength = []
    const countries = []

    if (data) {
        
        data.continents.forEach(element => {
            countriesLength.push(element.countries.length)
            countries.push(element.name)
        });
    }


    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <Container>
            <h1>Kıtalara Göre Ülke Sayısı</h1>
            <div style={{ maxWidth: "650px" }}>
                <Bar
                    data={{

                        labels: countries,
                        datasets: [
                            {
                                label: "total count/value",
                                data: countriesLength,
                                backgroundColor: ["#321325", "#5F0F40", "#9A031E", "#CB793A", "#FCDC4D", "#008DD5", "#DFBBB1"],
                            },
                        ],
                    }}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            labels: {
                                fontSize: 15,
                            },
                        },
                    }}
                />
            </div>
        </Container>
    );
}

export default Graphic;